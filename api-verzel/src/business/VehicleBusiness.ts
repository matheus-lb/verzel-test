import { VehicleDatabase } from "../data/vehicleDatabase";
import { Vehicle } from "../model/Vehicle";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UpdateVehicleDTO } from "../types/UpdateVehicleDTO";
import { VehicleInputDTO } from "../types/vehicleInputDTO";
import { ConflictError } from "./errors/ConflictError";
import { InvalidInputError } from "./errors/InvalidInputError";
import { NotFoundError } from "./errors/NotFoundError";

export class VehicleBusiness {

    constructor (
        private IdGenerator: IdGenerator,
        private vehicleDatabase: VehicleDatabase,
        private authenticator: Authenticator
    ) {}

    public insertVehicle = async (newVehicle: VehicleInputDTO) => {
        console.log(newVehicle)

        const { name,brand,model,price,description,photo, token } = newVehicle

        if (!name || !brand || !model || !price || !description || !photo || !token) {
            throw new InvalidInputError("Dados Incompletos")
        }


        if (!token) {
            throw new InvalidInputError("Token Inexistente")
        }

        const userTokenData = this.authenticator.getTokenData(token)


        const id = this.IdGenerator.generate()

        const photoLink = `${process.env.BASE_URL_API}/files/${newVehicle.photo}`

        const vehicle = new Vehicle(
            id,
            name,
            brand,
            model,
            price,
            description,
            photoLink   
        )

        await this.vehicleDatabase.insertVehicle(vehicle)
    }
    
    public getVehicle = async (search: string) => {

        if (!search) {
            throw new InvalidInputError("Identificador inválido")
        }

        const vehicleFromDB = await this.vehicleDatabase.selectVehicle(search)

        if (!vehicleFromDB) {
            throw new NotFoundError("veículo não encontrado")
        }

        return vehicleFromDB
    }

    public getAllVehicles = async () => {

        const  vehiclesFromDB = await this.vehicleDatabase.selectAllVehicle()

        

        return vehiclesFromDB
    }

    public updateVehicle = async (updateVehicle : UpdateVehicleDTO) => {

        const { token,id,name,brand,model,price,description,photo } = updateVehicle

        if (!updateVehicle.id) {
            throw new InvalidInputError("Identificador inválido")
        }
        
        if (!token) {
            throw new InvalidInputError("Token Inexistente")
        }

        const userTokenData = this.authenticator.getTokenData(token)

        if (!name || !brand || !model || !price || !description || !photo || !token) {
            throw new InvalidInputError("Dados Incompletos")
        }

        const vehicle = new Vehicle(
            id,
            name,
            brand,
            model,
            price,
            description,
            photo       
        )

        await this.vehicleDatabase.updateVehicle(id,vehicle)

    }

    public deleteVehicle = async (id:any)=>{

        const verifyVehicle = await this.vehicleDatabase.selectVehicle(id.id)

        console.log(id.id)


        if (!id) {
            throw new InvalidInputError("Identificador inválido")
        }

        if(!verifyVehicle){
            throw new NotFoundError('veiculo nao encontrado')
        }

        await this.vehicleDatabase.deleteVehicle(id.id)
    }
}