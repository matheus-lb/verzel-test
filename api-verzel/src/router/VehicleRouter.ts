import express from "express"
import { VehicleBusiness } from "../business/VehicleBusiness"
import { vehiclesController } from "../controller/vehicleController"
import { VehicleDatabase } from "../data/vehicleDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import upload from "../services/multerConfig"

export const vehicleRouter = express.Router()

const vehicleBusiness = new VehicleBusiness(
    new IdGenerator(),
    new VehicleDatabase(),
    new Authenticator()
)

const vehicleController = new vehiclesController(vehicleBusiness)

vehicleRouter.post("/insert", upload.single('file'),vehicleController.insertVehicle)
vehicleRouter.get("/select", vehicleController.getVehicle )
vehicleRouter.get("/all", vehicleController.getAllVehicles )
vehicleRouter.post("/update",upload.single('file'), vehicleController.updateVehicle )
vehicleRouter.delete("/delete", vehicleController.deleteVehicle )