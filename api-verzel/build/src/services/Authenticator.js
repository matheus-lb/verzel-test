"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Authenticator {
    generateToken(payload) {
        const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRES_IN });
        return token;
    }
    getTokenData(token) {
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        return payload;
    }
}
exports.Authenticator = Authenticator;
//# sourceMappingURL=Authenticator.js.map