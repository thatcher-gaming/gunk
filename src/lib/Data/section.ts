import db from "$lib/db";
import type { Thread } from "./thread";

type SectionType = Section;

export class Section {
    constructor(props: SectionType) {
        Object.assign(this, props);
    }

    id!: number;
    title!: string;
    desc!: string;
    icon!: string;

    static fetch(id: string): Section | undefined {
        const stmt = db.prepare(`
            SELECT id, title, desc, icon 
            FROM section
            WHERE id = @id;
        `);

        const section = stmt.get({ id }) as SectionType | undefined;

        return section && new Section(section);
    }

    static fetch_all(): Section[] {
        const stmt = db.prepare(`
            SELECT id, title, desc, icon FROM section;
        `);

        return stmt.all().map(o => new Section(o as SectionType));
    }

    static create(props: {
        title: string,
        desc: string,
        icon: string
    }) {
        const stmt = db.prepare(`
            INSERT INTO section (title, desc, icon) 
            VALUES (@title, @desc, @icon);
        `);

        return stmt.run(props);
    }

    // get_latest(): Thread {

    // }

    get_threads(limit = 50): Thread[] {
        const stmt = db.prepare(`
            SELECT id, title 
            FROM thread 
            WHERE section_id = @id
            LIMIT ${limit};
        `);

        const res = stmt.all({ id: this.id }) as Thread[];

        return res;
    }
}