import { error, redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
    if (!locals.active_user) throw redirect(303, "/login");
    if (!locals.active_user.is_admin) throw error(401);
};