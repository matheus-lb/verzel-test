import { Request, Response } from "express";
import { VehicleBusiness } from "../business/VehicleBusiness";
import { UpdateVehicleDTO } from "../types/UpdateVehicleDTO";
import { VehicleInputDTO } from "../types/vehicleInputDTO";

export class vehiclesController {

    constructor (
        private vehicleBusiness: VehicleBusiness
    ) {}

    public insertVehicle = async (req: Request, res: Response) => {
        try {


            const token = req.headers.authorization as string
            const { name, brand, model , price , description} = req.body

            const photo = req.file?.filename


            const newVehicle : VehicleInputDTO = {
                name,
                brand,
                model,
                price,
                description,
                photo,
                token
            }

            

            await this.vehicleBusiness.insertVehicle(newVehicle)

            res.status(201).send({ message: "Cadastro realizado com sucesso"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public getVehicle = async (req: Request, res: Response) => {
        try {

            const { search } = req.query

            const vehicle = await this.vehicleBusiness.getVehicle(search as string)

            res.status(200).send({ vehicle })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public getAllVehicles = async (req: Request, res: Response) => {
        try {

            const vehicles = await this.vehicleBusiness.getAllVehicles()

            res.status(200).send({ vehicles })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public updateVehicle = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const { id, name, brand, model , price , description } = req.body
            let photo = req.file?.filename

            const newVehicle : UpdateVehicleDTO = {
                token,
                id,
                name,
                brand,
                model,
                price,
                description,
                photo
            }

            console.log(newVehicle)
            

            await this.vehicleBusiness.updateVehicle(newVehicle)

            res.status(201).send({ message: "Dados do Veículo Atualizados"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }

    public deleteVehicle = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization as string
            const id = req.query

            await this.vehicleBusiness.deleteVehicle(id)

            res.status(201).send({ message: "Cadastro Deletado"})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({
                message: error.message
            })
        }
    }
}