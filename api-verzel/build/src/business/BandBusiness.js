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
exports.BandBusiness = void 0;
const Band_1 = require("../model/Band");
const ConflictError_1 = require("./errors/ConflictError");
const InvalidInputError_1 = require("./errors/InvalidInputError");
const NotFoundError_1 = require("./errors/NotFoundError");
class BandBusiness {
    constructor(IdGenerator, bandDatabase, authenticator) {
        this.IdGenerator = IdGenerator;
        this.bandDatabase = bandDatabase;
        this.authenticator = authenticator;
        this.createBand = (newBand) => __awaiter(this, void 0, void 0, function* () {
            const { name, musicGenre, responsible, token } = newBand;
            if (!name || !musicGenre || !responsible) {
                throw new InvalidInputError_1.InvalidInputError("Invalid entries. The 'name', 'musicGenre' and 'responsible' fields are required.");
            }
            if (!token) {
                throw new InvalidInputError_1.InvalidInputError("Invalid entry. Token is required.");
            }
            const userTokenData = this.authenticator.getTokenData(token);
            const bandFromDB = yield this.bandDatabase.selectBandByName(name);
            if (bandFromDB) {
                throw new ConflictError_1.ConflictError("Band already registered in the system");
            }
            const id = this.IdGenerator.generate();
            const band = new Band_1.Band(id, name, musicGenre, responsible);
            yield this.bandDatabase.insertBand(band);
        });
        this.getBand = (search) => __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                throw new InvalidInputError_1.InvalidInputError("Invalid entries. The band 'name' or 'id' are required for query.");
            }
            const bandFromDB = yield this.bandDatabase.selectBand(search);
            if (!bandFromDB) {
                throw new NotFoundError_1.NotFoundError("Band not found, make sure name or id is correct.");
            }
            return bandFromDB;
        });
    }
}
exports.BandBusiness = BandBusiness;
//# sourceMappingURL=BandBusiness.js.map