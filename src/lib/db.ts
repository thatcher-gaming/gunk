import Database from 'better-sqlite3';

const db = new Database("gunk.db");

db.pragma('journal_mode = WAL');
db.pragma('busy_timeout = 5000');
db.pragma('PRAGMA synchronous = NORMAL');

export default db