import Database from "better-sqlite3";
import { join, dirname } from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

// the file will be created in the current directory, if it doesn't exist
const dbPath = join(__dirname, "db.sqlite3");
const db = new Database(dbPath);

db.prepare(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name VARCHAR(255))"
).run();

db.prepare("INSERT INTO users (name) VALUES ('John Doe')").run();
db.prepare("INSERT INTO users (name) VALUES ('John Foo')").run();

const rows = db.prepare("select * from users").all();
console.log(rows); // [ { id: 1, name: 'John Doe' }, { id: 2, name: 'John Foo' } ]
