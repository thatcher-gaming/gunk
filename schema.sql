CREATE TABLE user (
    id TEXT PRIMARY KEY NOT NULL,
    handle TEXT UNIQUE NOT NULL CHECK(
        length("handle") <= 36
    ),
    password_hash TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,

    is_admin INTEGER NOT NULL DEFAULT FALSE,
    is_mod INTEGER NOT NULL DEFAULT FALSE,

    -- profile info
    pronouns TEXT CHECK(
        length("pronouns") <= 18 -- this seems reasonable?
    ),
    bio TEXT CHECK(
        length("bio") <= 1024
    ),
    links_json TEXT NOT NULL DEFAULT '{}',
    avatar_path TEXT,
    bg_path TEXT
) STRICT;

CREATE TABLE session (
    id TEXT PRIMARY KEY NOT NULL,
    user_id TEXT NOT NULL,

    ttl INTEGER NOT NULL DEFAULT 3600,
    created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id) REFERENCES user(id)
) STRICT;

CREATE TABLE section (
    id INTEGER PRIMARY KEY NOT NULL,

    title TEXT NOT NULL,
    desc TEXT NOT NULL,
    icon TEXT NOT NULL
) STRICT;

CREATE TABLE thread (
    id TEXT PRIMARY KEY NOT NULL,
    section_id TEXT NOT NULL,

    title TEXT NOT NULL,

    FOREIGN KEY(section_id) REFERENCES section(id)
) STRICT;

CREATE TABLE post (
    id INTEGER PRIMARY KEY NOT NULL,
    thread_id TEXT NOT NULL,
    author_id TEXT NOT NULL,

    content TEXT NOT NULL,

    created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(thread_id) REFERENCES thread(id),
    FOREIGN KEY(author_id) REFERENCES user(id)
) STRICT;