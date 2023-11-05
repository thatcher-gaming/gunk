import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals}) => {
    if (locals.active_user) {
        throw redirect(302, "/");
    }
};

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        
    }
};