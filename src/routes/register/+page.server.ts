import { User } from "$lib/Data/user";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

const schema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
}).required();

export const actions: Actions = {
    default: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());

        const result = schema.safeParse(data);
        if (!result.success) {
            const validationError = fromZodError(result.error);
            return fail(400, { error: validationError.message })
        }

        const { email, username: handle, password } = result.data;

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

        throw redirect(303, "/");
    }
};