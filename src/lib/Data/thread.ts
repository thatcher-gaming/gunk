import db from "$lib/db";
import type { Post } from "./post";

export class Thread {
    id!: string;

    static create({ title, root_post }: {
        title: string,
        root_post: Post,
    }) {

    };

    get_latest(): Post | undefined {
        const stmt = db.prepare(`
            SELECT P.content, A.id, A.handle, A.avatar_path
            FROM post P INNER JOIN user A
            ON P.author_id = A.id
            WHERE P.thread_id = ?; 
        `);

        const post = stmt.get(this.id) as Post | undefined;
        
        return post;
    }
}