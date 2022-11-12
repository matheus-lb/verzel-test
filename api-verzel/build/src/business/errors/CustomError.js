"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode = 400, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=CustomError.js.map