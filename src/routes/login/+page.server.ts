import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { User } from "$lib/Data/user";
import { Session, token_cookie } from "$lib/Data/session";

export const load: PageServerLoad = async ({ locals }) => {
    if (locals.active_user) {
        throw redirect(302, "/");
    }
};

const schema = z.object({
    handle: z.string().min(1),
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

        const { handle, password } = result.data;

        const user = User.fetch_by_handle(handle);
        if (!user) {
            return fail(400, { error: "doesn't look like that user exists" });
        }

        const is_valid = await user.check_password(password);
        if (!is_valid) {
            return fail(403, { error: "Incorrect Password." });
        }

        const session_id = Session.create(user.data.id);
        cookies.set(token_cookie, session_id);

        throw redirect(303, "/");
    }
};