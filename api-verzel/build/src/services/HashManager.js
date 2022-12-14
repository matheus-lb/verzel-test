"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashManager = void 0;
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt = __importStar(require("bcryptjs"));
dotenv_1.default.config();
class HashManager {
    constructor() {
        this.createHash = (plainText) => {
            const rounds = Number(process.env.BCRYPT_COST);
            const salt = (0, bcryptjs_1.genSaltSync)(rounds);
            const cypherText = (0, bcryptjs_1.hashSync)(plainText, salt);
            return cypherText;
        };
        this.compareHash = (plainText, cypherText) => {
            return (0, bcryptjs_1.compareSync)(plainText, cypherText);
        };
    }
    comparePasswordHash(senha, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            return bcrypt.compare(senha, hash);
        });
    }
}
exports.HashManager = HashManager;
//# sourceMappingURL=HashManager.js.map