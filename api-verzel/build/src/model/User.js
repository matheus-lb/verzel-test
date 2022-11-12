"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getPassword = () => {
            return this.password;
        };
    }
    static toUserModel(user) {
        return new User(user.id, user.name, user.email, user.password);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map