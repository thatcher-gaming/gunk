import { User } from "$lib/Data/user";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params: { handle } }) => {
    let user = User.fetch_by_handle(handle);

    if (!user) throw error(404);

    return { user }
};