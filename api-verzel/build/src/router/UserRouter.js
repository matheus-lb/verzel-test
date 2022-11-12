"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserBusiness_1 = require("../business/UserBusiness");
const UserController_1 = require("../controller/UserController");
const UserDatabase_1 = require("../data/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
exports.userRouter = express_1.default.Router();
const userBussines = new UserBusiness_1.UserBusiness(new IdGenerator_1.IdGenerator(), new UserDatabase_1.UserDatabase(), new Authenticator_1.Authenticator());
const userController = new UserController_1.UserController(userBussines);
exports.userRouter.post("/signup", userController.signUp);
exports.userRouter.post("/login", userController.login);
//# sourceMappingURL=UserRouter.js.map