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
exports.BandDatabase = void 0;
const Band_1 = require("../model/Band");
const BaseDatabase_1 = require("./BaseDatabase");
class BandDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.selectBandByName = (name) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection()
                    .select('*')
                    .from(BandDatabase.TABLE_NAME)
                    .where({ name });
                return result[0] && Band_1.Band.toBandModel(result[0]);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.selectBand = (search) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection()
                    .select('*')
                    .from(BandDatabase.TABLE_NAME)
                    .where({ id: search })
                    .orWhere({ name: search });
                return result[0] && Band_1.Band.toBandModel(result[0]);
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.insertBand = (band) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection()
                    .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMusicGenre(),
                    responsible: band.getResponsible()
                })
                    .into(BandDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.BandDatabase = BandDatabase;
BandDatabase.TABLE_NAME = "lama_bands";
//# sourceMappingURL=BandDatabase.js.map