import { Section } from "$lib/Data/section";
import db from "$lib/db";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ }) => {
    console.time("homepage load")
    const sections = Section.fetch_all();
    let threads = sections.flatMap(
        sect => sect
            .get_threads(2)
            .map(trd => ({ thread: trd, post: trd.get_latest() }))
    );
    console.timeEnd("homepage load");

    return {
        sections: structuredClone(sections),
        threads: structuredClone(threads),
    }
};