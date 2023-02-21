import Database from "better-sqlite3";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export class DBHandler {

    public async connect(){
        try {
            const filename = fileURLToPath(import.meta.url);
            const path = dirname(filename);
            const dbPath = join(path, "db.sqlite3");
            const db = new Database(dbPath);
            db.prepare("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name VARCHAR(255))").run();
            return db
        } catch (error) {
            throw new Error('Fail connection: ' + error);
        }
    }
}