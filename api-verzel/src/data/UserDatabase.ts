import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {


    public insertUser = async (user: User) => {
        try {
            await BaseDatabase.connection()
                .into("users_table")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                })


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectUserByEmail = async (email: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from("users_table")
                .where({ email })

            return result[0] && User.toUserModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}