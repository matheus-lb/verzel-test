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
exports.VehicleDatabase = void 0;
const Vehicle_1 = require("../model/Vehicle");
const BaseDatabase_1 = require("./BaseDatabase");
class VehicleDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.selectVehicle = (search) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection()
                    .select('*')
                    .from(VehicleDatabase.TABLE_NAME)
                    .where({ id: search });
                return result[0] && Vehicle_1.Vehicle.toVehicleModel(result[0]);
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.selectAllVehicle = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection()
                    .select('*')
                    .from(VehicleDatabase.TABLE_NAME)
                    .orderBy('price', 'asc');
                return result;
            }
            catch (error) {
                console.log(error);
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.insertVehicle = (vehicle) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection()
                    .insert({
                    id: vehicle.getId(),
                    name: vehicle.getName(),
                    brand: vehicle.getbrand(),
                    model: vehicle.getModel(),
                    price: vehicle.getPrice(),
                    description: vehicle.getDescription(),
                    photo: vehicle.getPhoto()
                })
                    .into(VehicleDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.updateVehicle = (id, vehicle) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection()
                    .into(VehicleDatabase.TABLE_NAME)
                    .where({ id: id })
                    .update({
                    name: vehicle.getName(),
                    brand: vehicle.getbrand(),
                    model: vehicle.getModel(),
                    price: vehicle.getPrice(),
                    description: vehicle.getDescription(),
                    photo: vehicle.getPhoto()
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.deleteVehicle = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection
                    .into(VehicleDatabase.TABLE_NAME)
                    .where({ id: id })
                    .del();
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.VehicleDatabase = VehicleDatabase;
VehicleDatabase.TABLE_NAME = "vehicles_table";
//# sourceMappingURL=vehicleDatabase.js.map