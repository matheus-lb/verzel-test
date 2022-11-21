"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRouter = void 0;
const express_1 = __importDefault(require("express"));
const VehicleBusiness_1 = require("../business/VehicleBusiness");
const vehicleController_1 = require("../controller/vehicleController");
const vehicleDatabase_1 = require("../data/vehicleDatabase");
const Authenticator_1 = require("../services/Authenticator");
const IdGenerator_1 = require("../services/IdGenerator");
const multerConfig_1 = __importDefault(require("../services/multerConfig"));
exports.vehicleRouter = express_1.default.Router();
const vehicleBusiness = new VehicleBusiness_1.VehicleBusiness(new IdGenerator_1.IdGenerator(), new vehicleDatabase_1.VehicleDatabase(), new Authenticator_1.Authenticator());
const vehicleController = new vehicleController_1.vehiclesController(vehicleBusiness);
exports.vehicleRouter.post("/insert", multerConfig_1.default.single('file'), vehicleController.insertVehicle);
exports.vehicleRouter.get("/select", vehicleController.getVehicle);
exports.vehicleRouter.get("/all", vehicleController.getAllVehicles);
exports.vehicleRouter.post("/update", multerConfig_1.default.single('file'), vehicleController.updateVehicle);
exports.vehicleRouter.delete("/delete", vehicleController.deleteVehicle);
//# sourceMappingURL=VehicleRouter.js.map