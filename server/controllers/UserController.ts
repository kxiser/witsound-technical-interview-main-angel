import { User } from '../models/User'

export class UserController {

    public async get(connection: any, user: User): Promise<User | null> {
        let result = null
        if (user.id != null) {
            const { id, name } = await connection.prepare('SELECT id, name FROM users WHERE id = ?').get(user.id);
            console.log(id, name);
            result = { id, name }
        }
        return result
    }
    public async getAll(connection: any) {
        const users =  await connection.prepare('SELECT id, name FROM users Order by id DESC').all();
        console.log(users);
        return await users
    }

    public async set(connection: any, user: User): Promise<boolean> {
        let result = false
        if (user.name != null) {
            try {
                result = await connection.prepare("INSERT INTO users (name) VALUES (?)").run(user.name);
            } catch (error) {
                console.log(error);
            }
        }
        return result
    }
    // public async update(user: User): Promise<void> {

    // }
    // public async delete(user: User): Promise<void> {

    // }
}