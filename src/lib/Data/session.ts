import db from "$lib/db";
import { nanoid } from "nanoid";

export const token_cookie = "token";

export interface SessionData {
    id: string;
    account_id: string;
    // in seconds
    ttl: number;
    created: Date;
}

export class Session {
    static create(user_id: string) {
        const id = nanoid();

        const stmt = db.prepare(`
            INSERT INTO session (id, user_id)
            VALUES (@id, @user_id);
        `);

        stmt.run({ id, user_id });

        return id;
    }

    static fetch_token_user(token: string): {id: string, handle: string} | undefined {
        const stmt = db.prepare(`
            SELECT U.id, U.handle
            FROM session S INNER JOIN user U
            ON S.user_id = U.id
            WHERE S.id = ?;
        `);

        const data = stmt.get(token) as any | undefined;

        if (!data) {
            return;
        }

        return data;
    }
}