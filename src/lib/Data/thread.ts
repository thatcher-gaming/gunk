import db from "$lib/db";
import { nanoid } from "nanoid";
import { Post } from "./post";

export interface ThreadData {
    id: string;
    section_id: string,
    title: string;
}

export class Thread {
    constructor(public data: ThreadData) { }

    export = () => this.data;

    static create_stmt = db.prepare(`
        INSERT INTO thread (id, section_id, title)
        VALUES(@id, @section_id, @title);
    `);

    static create({ title, section_id }: {
        title: string,
        section_id: string,
    }) {
        const id = nanoid();
        this.create_stmt.run({ id, section_id, title });

        return new Thread({ id, section_id, title });
    };

    static getlatest_stmt = db.prepare(`
        SELECT P.content, A.id, A.handle, A.avatar_path
        FROM post P INNER JOIN user A
        ON P.author_id = A.id
        WHERE P.thread_id = ?; 
    `);

    get_latest() {
        const post = Thread.getlatest_stmt.get(this.data.id) as {
                content: string,
            } | undefined;

        return post;
    }


    add_post(params: {
        author_id: string,
        content: string,
    }) {
        Post.create({
            thread_id: this.data.id,
            ...params,
        });
    }
}