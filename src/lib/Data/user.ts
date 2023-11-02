import db from "$lib/db";
import argon2 from "argon2";
import { nanoid } from "nanoid";

const unsensitive_fields = `id, handle, pronouns, bio,
    links, avatar_path, bg_path`

type UserType = User;
class User {
    constructor(data: UserType) {
        Object.assign(this, data);
    }

    id!: string;
    handle!: string;

    pronouns?: string;
    bio?: string;
    links!: { [label: string]: string };
    avatar_path?: string;
    bg_path?: string;

    static fetch_by_id() {

    }

    static fetch_by_handle(handle: string): User {
        const stmt = db.prepare(`
            SELECT ${unsensitive_fields}
            FROM user
            WHERE handle = ?;
        `);

        let data = stmt.get(handle) as any;
        data = User.process_db_result(data)

        return new User(data);
    }

    static process_db_result(data: any) {
        data.links = JSON.parse(data.links_json)
        data.links_json = undefined;

        return data;
    }

    static email_is_used(email: string): boolean {
        const stmt = db.prepare(`
            SELECT EXISTS(SELECT 1 FROM user WHERE email = ?);
        `);

        const result = stmt.get(email);
        if (typeof result != "number" || result > 1) {
            throw "invalid db response";
        }

        return Boolean(result);
    }


    static handle_is_taken(handle: string): boolean {
        const stmt = db.prepare(`
            SELECT EXISTS(SELECT 1 FROM user WHERE handle = ?);
        `);

        const result = stmt.get(handle);
        if (typeof result != "number" || result > 1) {
            throw "invalid db response";
        }

        return Boolean(result);
    }

    static async create({ handle, email, password }: {
        handle: string,
        email: string,
        password: string,
    }) {
        if (User.handle_is_taken(handle))
            throw "A user with this username already exists"
        if (User.email_is_used(email))
            throw "A user with this email address already exists"

        const id = nanoid();
        const hash = await argon2.hash(password);

        const stmt = db.prepare(`
            INSERT INTO user (id, handle, email, password_hash)
            VALUES (?, ?, ?, ?)
        `);

        stmt.run(id, handle, email, hash);

        return id;
    }

    async check_password(password: string): Promise<boolean> {
        const stmt = db.prepare(`
            SELECT password_hash
            FROM user
            WHERE id = ?
        `);

        const hash = stmt.get(this.id) as string;
        const result = await argon2.verify(hash, password);

        return result
    }
}

