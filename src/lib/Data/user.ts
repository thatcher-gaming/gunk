import db from "$lib/db";
import argon2 from "argon2";
import { nanoid } from "nanoid";

export const unsensitive_fields = ["id", "handle", "pronouns", "bio",
    "links_json", "avatar_path", "bg_path"];

export interface UserData {
    id: string;
    handle: string;

    pronouns?: string;
    bio?: string;
    links: { [label: string]: string };
    avatar_path?: string;
    bg_path?: string;
}

export class User {
    static fetch_by_id(id: string) {
        const stmt = db.prepare(`
            SELECT ${unsensitive_fields.join(", ")}
            FROM user
            WHERE id = ?;
        `);

        let data = stmt.get(id) as UserData | undefined;
        if (!data) return;
        data = User.process_db_result(data)

        return data;
    }

    static fetch_by_handle(handle: string): UserData | undefined {
        const stmt = db.prepare(`
                SELECT ${unsensitive_fields.join(", ")}
                FROM user
                WHERE handle = ?;
            `);

        let data = stmt.get(handle) as UserData | undefined;
        if (!data) return;
        data = User.process_db_result(data)

        return data;
    }

    private static process_db_result(data: any) {
        data.links = JSON.parse(data.links_json)
        data.links_json = undefined;

        return data;
    }

    private static email_is_used(email: string): boolean {
        const stmt = db.prepare(`
                SELECT EXISTS(SELECT 1 FROM user WHERE email = ?);
            `);

        stmt.pluck();
        const result = stmt.get(email);
        if (typeof result != "number" || result > 1) {
            throw new Error("invalid db response");
        }


        return Boolean(result);
    }


    private static handle_is_taken(handle: string): boolean {
        const stmt = db.prepare(`
                SELECT EXISTS(SELECT 1 FROM user WHERE handle = ?);
            `);

        stmt.pluck();
        const result = stmt.get(handle);
        if (typeof result != "number" || result > 1) {
            throw new Error("invalid db response");
        }

        return Boolean(result);
    }

    static async create({ handle, email, password }: {
        handle: string,
        email: string,
        password: string,
    }) {
        if (User.email_is_used(email))
            throw new Error("A user with this email address already exists");
        if (User.handle_is_taken(handle))
            throw new Error("A user with this username already exists");

        const id = nanoid();
        const hash = await argon2.hash(password);

        const stmt = db.prepare(`
                INSERT INTO user (id, handle, email, password_hash)
                VALUES (@id, @handle, @email, @hash)
            `);

        stmt.run({ id, handle, email, hash });

        return id;
    }

    static async check_password(
        user_id: string, password: string
    ): Promise<boolean> {
        const stmt = db.prepare(`
                SELECT password_hash
                FROM user
                WHERE id = ?
            `);

        const hash = stmt.get(user_id) as string;
        const result = await argon2.verify(hash, password);

        return result
    }
}
