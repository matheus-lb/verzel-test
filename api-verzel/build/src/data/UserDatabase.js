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
exports.UserDatabase = void 0;
const User_1 = require("../model/User");
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection()
                    .into("users_table")
                    .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.selectUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection()
                    .select('*')
                    .from("users_table")
                    .where({ email });
                return result[0] && User_1.User.toUserModel(result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDatabase.js.map