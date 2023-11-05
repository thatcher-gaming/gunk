import { Section } from "$lib/Data/section";
import { z } from "zod";
import type { Actions } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { fromZodError } from "zod-validation-error";

const schema = z.object({
    title: z.string().min(1),
    desc: z.string().min(1),
    icon: z.string().min(1).max(4)
}).required();

export const actions: Actions = {
    default: async ({ request }) => {
        const data = Object.fromEntries(await request.formData());
        const result = schema.safeParse(data);

        if (!result.success) {
            const validationError = fromZodError(result.error);
            return fail(400, { error: validationError.message })
        }

        Section.create(result.data);
        throw redirect(303, "/");
    }
};