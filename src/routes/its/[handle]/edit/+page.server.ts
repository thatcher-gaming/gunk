import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { User } from "$lib/Data/user";

export const load: PageServerLoad = async ({ locals: { active_user }, params: { handle } }) => {
    if (!active_user) throw error(401);
    if (active_user?.handle != handle) throw redirect(302, "/login");

    const user = User.fetch_by_id(active_user?.id);


};