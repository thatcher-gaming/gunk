import { Section } from "$lib/Data/section";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({}) => {
    const sections = Section.fetch_all();

    return {
        sections: structuredClone(sections)
    }
};