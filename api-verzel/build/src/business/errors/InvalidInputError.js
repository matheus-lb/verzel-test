"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidInputError = void 0;
const CustomError_1 = require("./CustomError");
class InvalidInputError extends CustomError_1.CustomError {
    constructor(message) {
        super(417, message);
    }
}
exports.InvalidInputError = InvalidInputError;
//# sourceMappingURL=InvalidInputError.js.map