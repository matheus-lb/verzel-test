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
exports.vehiclesController = void 0;
class vehiclesController {
    constructor(vehicleBusiness) {
        this.vehicleBusiness = vehicleBusiness;
        this.insertVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const token = req.headers.authorization;
                const { name, brand, model, price, description } = req.body;
                const photo = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
                const newVehicle = {
                    name,
                    brand,
                    model,
                    price,
                    description,
                    photo,
                    token
                };
                yield this.vehicleBusiness.insertVehicle(newVehicle);
                res.status(201).send({ message: "Cadastro realizado com sucesso" });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
        this.getVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { search } = req.query;
                const vehicle = yield this.vehicleBusiness.getVehicle(search);
                res.status(200).send({ vehicle });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
        this.getAllVehicles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const vehicles = yield this.vehicleBusiness.getAllVehicles();
                res.status(200).send({ vehicles });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
        this.updateVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const token = req.headers.authorization;
                const { id, name, brand, model, price, description } = req.body;
                let photo = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
                const newVehicle = {
                    token,
                    id,
                    name,
                    brand,
                    model,
                    price,
                    description,
                    photo
                };
                console.log(newVehicle);
                yield this.vehicleBusiness.updateVehicle(newVehicle);
                res.status(201).send({ message: "Dados do Veículo Atualizados" });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
        this.deleteVehicle = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const id = req.query;
                yield this.vehicleBusiness.deleteVehicle(id);
                res.status(201).send({ message: "Cadastro Deletado" });
            }
            catch (error) {
                res.status(error.statusCode || 500).send({
                    message: error.message
                });
            }
        });
    }
}
exports.vehiclesController = vehiclesController;
//# sourceMappingURL=vehicleController.js.map