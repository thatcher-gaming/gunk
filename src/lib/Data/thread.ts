import db from "$lib/db";
import { nanoid } from "nanoid";
import { Post } from "./post";

export interface ThreadData {
    id: string;
    section_id: string,
    title: string;
}

export interface ThreadDataDeluxe extends ThreadData {
    post_count: number,
}


export class Thread {
    constructor(public data: ThreadData) { }

    export = () => this.data;

    static create_stmt = db.prepare(`
        INSERT INTO thread (id, section_id, title)
        VALUES(@id, @section_id, @title);
    `);

    static create(params: {
        title: string,
        section_id: string,
    }) {
        const id = nanoid();
        this.create_stmt.run({ id, ...params });

        return new Thread({ id, ...params });
    };

    static fetch_stmt = db.prepare(`
        SELECT id, section_id, title
        FROM thread
        WHERE id = ?;
    `);

    static fetch(id: string) {
        return this.fetch_stmt.get(id) as ThreadData | undefined;
    }

    static getlatest_stmt = db.prepare(`
        SELECT P.content, A.id, A.handle, A.avatar_path
        FROM post P INNER JOIN user A
        ON P.author_id = A.id
        WHERE P.thread_id = ?; 
    `).expand();

    get_latest_post() {
        const post = Thread.getlatest_stmt.get(this.data.id) as {
            post: { content: string },
            user: { id: string, handle: string, avatar_path: string }
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