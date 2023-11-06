import { Section } from '$lib/Data/section';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: { id } }) => {
    const section = Section.fetch(id);

    if (!section) {
        throw error(404);
    }

    const threads = section.get_threads();

    return {
        section: section.export(),
        threads: threads.map(o => o.export()),
    };
};