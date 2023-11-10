import db from "$lib/db";
import { Thread, type ThreadData } from "./thread";

export interface SectionData {
    id: number;
    title: string;
    desc: string;
    icon: string;
}

const section_fields = "id, title, desc, icon";

export class Section {
    constructor(public data: SectionData) { }

    export = () => this.data;

    static fetch(id: string): Section | undefined {
        const stmt = db.prepare(`
            SELECT ${section_fields} 
            FROM section
            WHERE id = @id;
        `);

        const section = stmt.get({ id }) as SectionData | undefined;

        return section && new Section(section);
    }

    static fetch_all(): Section[] {
        const stmt = db.prepare(`
            SELECT ${section_fields} FROM section;
        `);

        return stmt.all().map(o => new Section(o as SectionData));
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

    private static get_latest_stmt = db.prepare(`
        SELECT id, title, section_id
        FROM thread 
        WHERE section_id = @id
        LIMIT @limit;
    `);
    get_threads(limit = 50): Thread[] {
        const res = Section.get_latest_stmt.all({ 
            limit,
            id: String(this.data.id)
        }) as ThreadData[];

        return res.map(o => new Thread(o));
    }
}