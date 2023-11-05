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

    static fetch_token_user(token: string): {
        id: string,
        handle: string,
        is_admin: boolean,
        is_mod: boolean,
    } | undefined {
        const stmt = db.prepare(`
            SELECT U.id, U.handle, U.is_admin, U.is_mod
            FROM session S INNER JOIN user U
            ON S.user_id = U.id
            WHERE S.id = ?;
        `);

        const data = stmt.get(token) as any | undefined;

        if (!data) {
            return;
        }

        data.is_admin = Boolean(data.is_admin);
        data.is_mod = Boolean(data.is_mod);

        return data;
    }
}