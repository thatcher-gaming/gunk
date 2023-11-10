import { User } from "$lib/Data/user";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { Session, token_cookie } from "$lib/Data/session";

export const load: PageServerLoad = async ({locals}) => {
    if (locals.active_user) {
        throw redirect(302, "/");
    }
};

const schema = z.object({
    handle: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
}).required();

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const data = Object.fromEntries(await request.formData());

        const result = schema.safeParse(data);
        if (!result.success) {
            const validationError = fromZodError(result.error);
            return fail(400, { error: validationError.message })
        }

        const { email, handle, password } = result.data;

        let id;

        try {
            id = await User.create({
                email,
                handle,
                password
            });
        } catch (e) {
            return fail(500, { error: (e as Error).message })
        }

        const session_id = Session.create(id);
        cookies.set(token_cookie, session_id, {
            path: "/",
            secure: true,
        });

        throw redirect(303, "/");
    }
};