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
exports.BandController = void 0;
class BandController {
    constructor(bandBusiness) {
        this.bandBusiness = bandBusiness;
        this.createBand = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const { name, musicGenre, responsible } = req.body;
                const newBand = {
                    name,
                    musicGenre,
                    responsible,
                    token
                };
                yield this.bandBusiness.createBand(newBand);
                res.status(201).send({ message: "Band successfully registered" });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
        this.getBand = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { search } = req.query;
                const band = yield this.bandBusiness.getBand(search);
                res.status(200).send({ band });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
    }
}
exports.BandController = BandController;
//# sourceMappingURL=BandController.js.map