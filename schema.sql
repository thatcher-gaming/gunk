CREATE TABLE user (
    id TEXT PRIMARY KEY NOT NULL,
    handle TEXT UNIQUE NOT NULL CHECK(
        length("handle") <= 36
    ),
    password_hash TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,

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

