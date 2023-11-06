import { Section } from "$lib/Data/section";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    console.time("homepage load")

    let sections = Section.fetch_all().flatMap(sect => ({
        section: sect.export(),
        threads: sect.get_threads(2)
            .map(t => ({ thread: t.export(), post: t.get_latest() }))
    }));

    console.timeEnd("homepage load");

    return { sections }
};