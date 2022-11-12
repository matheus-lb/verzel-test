"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storange = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path_1.default.resolve("./uploads"));
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    }
});
function fileFilter(req, file, cb) {
    const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoaceito => formatoaceito === file.mimetype);
    if (extensaoImg) {
        return cb(null, true);
    }
    return cb(null, false);
}
const upload = (0, multer_1.default)({ storage: storange, fileFilter: fileFilter });
exports.default = upload;
//# sourceMappingURL=multerConfig.js.map