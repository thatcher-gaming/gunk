import db from "$lib/db";

export interface PostData {
    content: string,
}

export class Post {
    static create_stmt = db.prepare(`
        INSERT INTO post (thread_id, author_id, content) 
        VALUES (@thread_id, @author_id, @content);
    `);

    static create(params: {
        thread_id: string,
        author_id: string,
        content: string
    }) {
        this.create_stmt.run(params);
    }

}