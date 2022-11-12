"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const User_1 = require("../model/User");
const ConflictError_1 = require("./errors/ConflictError");
const InvalidInputError_1 = require("./errors/InvalidInputError");
const NotFoundError_1 = require("./errors/NotFoundError");
class UserBusiness {
    constructor(idGenerator, userDatabase, authenticator) {
        this.idGenerator = idGenerator;
        this.userDatabase = userDatabase;
        this.authenticator = authenticator;
        this.signUp = (newUser) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password } = newUser;
            if (!name || !email || !password) {
                throw new InvalidInputError_1.InvalidInputError("Dados incompletos.");
            }
            if (password.length < 8) {
                throw new InvalidInputError_1.InvalidInputError("Senha inválida, a senha deve conter no mínimo 8 caracteres");
            }
            if (email.includes("@") === false) {
                throw new InvalidInputError_1.InvalidInputError("Email inválido");
            }
            const userFromDB = yield this.userDatabase.selectUserByEmail(email);
            if (userFromDB) {
                throw new ConflictError_1.ConflictError("Usuário já registrado");
            }
            const id = this.idGenerator.generate();
            const cryptedPassword = (Number(password) * 2415).toString();
            const user = new User_1.User(id, name, email, cryptedPassword);
            yield this.userDatabase.insertUser(user);
            const token = this.authenticator.generateToken({
                id
            });
            return token;
        });
        this.login = (input) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = input;
            if (!email || !password) {
                throw new InvalidInputError_1.InvalidInputError("Dados incompletos");
            }
            const userFromDB = yield this.userDatabase.selectUserByEmail(email);
            if (!userFromDB) {
                throw new NotFoundError_1.NotFoundError("Usuário não encontrado");
            }
            const passwordFromDB = userFromDB.getPassword();
            const isPasswordCorrect = (Number(passwordFromDB) / 2415).toString() === password;
            if (!isPasswordCorrect) {
                throw new NotFoundError_1.NotFoundError("Senha incorreta");
            }
            const token = this.authenticator.generateToken({
                id: userFromDB.getId(),
            });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map