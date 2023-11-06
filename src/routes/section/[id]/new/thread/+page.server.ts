import { Post } from "$lib/Data/post";
import { Thread } from "$lib/Data/thread";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: active_user }) => {
    if (!active_user) throw redirect(302, "/");
};

export const actions: Actions = {
    default: async ({
        request,
        params: { id: section_id },
        locals: { active_user }
    }) => {
        const { title, content } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>;

        const thread = Thread.create({ title, section_id });
        thread.add_post({ author_id: active_user!.id, content });

        throw redirect(303, `/section/${section_id}/thread/${thread.data.id}`);
    }
};