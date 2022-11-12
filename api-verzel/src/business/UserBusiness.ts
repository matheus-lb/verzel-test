import { UserDatabase } from "../data/UserDatabase";
import { User} from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignUpInputDTO } from "../types/signUpInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";

export class UserBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}

    public signUp = async (newUser: SignUpInputDTO) => {

        const { name, email, password} = newUser

        if (!name || !email || !password ) {
            throw new InvalidInputError("Dados incompletos.")
        }

        if (password.length < 8) {
            throw new InvalidInputError("Senha inválida, a senha deve conter no mínimo 8 caracteres")
        }

        if (email.includes("@") === false) {
            throw new InvalidInputError("Email inválido")
        }


        const userFromDB = await this.userDatabase.selectUserByEmail(email)

        if (userFromDB) {
            throw new ConflictError("Usuário já registrado")
        }

        const id = this.idGenerator.generate()

        const cryptedPassword = (Number(password)*2415).toString()
        

        const user = new User(
            id,
            name,
            email,
            cryptedPassword,
        )

        await this.userDatabase.insertUser(user)
        
        const token = this.authenticator.generateToken({
            id
        })
        
        return token
    }

    public login = async (input: LoginInputDTO) => {
        
        const { email, password } = input

        if (!email || !password) {
            throw new InvalidInputError("Dados incompletos")
        }

        const userFromDB = await this.userDatabase.selectUserByEmail(email)


        if (!userFromDB) {
            throw new NotFoundError("Usuário não encontrado")
        }

        const passwordFromDB = userFromDB.getPassword()

        const isPasswordCorrect = (Number(passwordFromDB)/2415).toString() === password
      

        
        if (!isPasswordCorrect) {
            throw new NotFoundError("Senha incorreta")
        }


       
        const token = this.authenticator.generateToken({
            id: userFromDB.getId(),
        })

        return token
    }
    
}