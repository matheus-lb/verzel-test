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
exports.VehicleBusiness = void 0;
const Vehicle_1 = require("../model/Vehicle");
const InvalidInputError_1 = require("./errors/InvalidInputError");
const NotFoundError_1 = require("./errors/NotFoundError");
class VehicleBusiness {
    constructor(IdGenerator, vehicleDatabase, authenticator) {
        this.IdGenerator = IdGenerator;
        this.vehicleDatabase = vehicleDatabase;
        this.authenticator = authenticator;
        this.insertVehicle = (newVehicle) => __awaiter(this, void 0, void 0, function* () {
            console.log(newVehicle);
            const { name, brand, model, price, description, photo, token } = newVehicle;
            if (!name || !brand || !model || !price || !description || !photo || !token) {
                throw new InvalidInputError_1.InvalidInputError("Dados Incompletos");
            }
            if (!token) {
                throw new InvalidInputError_1.InvalidInputError("Token Inexistente");
            }
            const userTokenData = this.authenticator.getTokenData(token);
            const id = this.IdGenerator.generate();
            const photo2 = `${process.env.BASE_URL_API}/files/${newVehicle.photo}`;
            const vehicle = new Vehicle_1.Vehicle(id, name, brand, model, price, description, photo);
            yield this.vehicleDatabase.insertVehicle(vehicle);
        });
        this.getVehicle = (search) => __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                throw new InvalidInputError_1.InvalidInputError("Identificador inválido");
            }
            const vehicleFromDB = yield this.vehicleDatabase.selectVehicle(search);
            if (!vehicleFromDB) {
                throw new NotFoundError_1.NotFoundError("veículo não encontrado");
            }
            return vehicleFromDB;
        });
        this.getAllVehicles = () => __awaiter(this, void 0, void 0, function* () {
            const vehiclesFromDB = yield this.vehicleDatabase.selectAllVehicle();
            return vehiclesFromDB;
        });
        this.updateVehicle = (updateVehicle) => __awaiter(this, void 0, void 0, function* () {
            const { token, id, name, brand, model, price, description, photo } = updateVehicle;
            if (!updateVehicle.id) {
                throw new InvalidInputError_1.InvalidInputError("Identificador inválido");
            }
            if (!token) {
                throw new InvalidInputError_1.InvalidInputError("Token Inexistente");
            }
            const userTokenData = this.authenticator.getTokenData(token);
            if (!name || !brand || !model || !price || !description || !photo || !token) {
                throw new InvalidInputError_1.InvalidInputError("Dados Incompletos");
            }
            const vehicle = new Vehicle_1.Vehicle(id, name, brand, model, price, description, photo);
            yield this.vehicleDatabase.updateVehicle(id, vehicle);
        });
        this.deleteVehicle = (id) => __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new InvalidInputError_1.InvalidInputError("Identificador inválido");
            }
            yield this.vehicleDatabase.deleteVehicle(id);
        });
    }
}
exports.VehicleBusiness = VehicleBusiness;
//# sourceMappingURL=VehicleBusiness.js.map