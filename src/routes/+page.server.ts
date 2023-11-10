import { Section, type SectionData } from "$lib/Data/section";
import type { Thread, ThreadData } from "$lib/Data/thread";
import type { PageServerLoad } from "./$types";

// this counts as caching, i think.
let sections: {
    section: SectionData;
    threads: {
        thread: ThreadData;
        post: ReturnType<Thread["get_latest_post"]> | undefined;
    }[];
}[];

let expires = Date.now();
// time to live in seconds
const ttl = 10;

export const load: PageServerLoad = async () => {
    console.time("homepage load")

    if (!sections || expires < Date.now()) {
        sections = Section.fetch_all().flatMap(sect => ({
            ttl: Date.now(),
            section: sect.export(),
            threads: sect.get_threads(2)
                .map(t => ({ thread: t.export(), post: t.get_latest_post() }))
        }));

        expires = Date.now() + ttl * 1000;
    }

    console.timeEnd("homepage load");

    return { sections }
};