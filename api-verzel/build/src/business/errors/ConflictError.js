"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictError = void 0;
const CustomError_1 = require("./CustomError");
class ConflictError extends CustomError_1.CustomError {
    constructor(message) {
        super(409, message);
    }
}
exports.ConflictError = ConflictError;
//# sourceMappingURL=ConflictError.js.map