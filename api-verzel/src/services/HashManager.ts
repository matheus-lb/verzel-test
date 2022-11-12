import { compareSync, genSaltSync, hashSync } from "bcryptjs"
import dotenv from "dotenv"
import * as bcrypt from 'bcryptjs'

dotenv.config()

export class HashManager {

    createHash = (plainText: string): string => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt: string = genSaltSync(rounds)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }

    public async comparePasswordHash(senha:any , hash : any)  : Promise<boolean> {
        return bcrypt.compare(senha,hash)
    }
}