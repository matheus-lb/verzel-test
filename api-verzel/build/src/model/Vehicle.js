"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(id, name, brand, model, price, description, photo) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.description = description;
        this.photo = photo;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.updateName = (name) => {
            this.name = name;
        };
        this.getbrand = () => {
            return this.brand;
        };
        this.updateBrand = (brand) => {
            this.brand = brand;
        };
        this.getModel = () => {
            return this.model;
        };
        this.updateModel = (model) => {
            this.model = model;
        };
        this.getPrice = () => {
            return this.price;
        };
        this.updatePrice = (price) => {
            this.price = price;
        };
        this.getDescription = () => {
            return this.description;
        };
        this.updateDescription = (description) => {
            this.description = description;
        };
        this.getPhoto = () => {
            return this.photo;
        };
        this.updatePhoto = (photo) => {
            this.photo = photo;
        };
    }
    static toVehicleModel(vehicle) {
        return new Vehicle(vehicle.id, vehicle.name, vehicle.brand, vehicle.model, vehicle.price, vehicle.description, vehicle.photo);
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map