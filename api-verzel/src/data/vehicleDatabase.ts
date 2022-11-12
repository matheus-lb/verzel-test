import { Vehicle } from "../model/Vehicle";
import { UpdateVehicleDTO } from "../types/UpdateVehicleDTO";
import { BaseDatabase } from "./BaseDatabase";

export class VehicleDatabase extends BaseDatabase {

    private static TABLE_NAME = "vehicles_table"


    public selectVehicle = async (search: string): Promise<Vehicle | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(VehicleDatabase.TABLE_NAME)
                .where({ id: search })

            return result[0] && Vehicle.toVehicleModel(result[0])

        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public selectAllVehicle = async (): Promise<any | undefined> => {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(VehicleDatabase.TABLE_NAME)
                .orderBy('price', 'asc')

            return result

        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public insertVehicle = async (vehicle: Vehicle) => {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: vehicle.getId(),
                    name: vehicle.getName(),
                    brand: vehicle.getbrand(),
                    model: vehicle.getModel(),
                    price: vehicle.getPrice(),
                    description: vehicle.getDescription(),
                    photo: vehicle.getPhoto()
                })
                .into(VehicleDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public updateVehicle = async (id: string, vehicle: Vehicle) => {
        try {
            await BaseDatabase.connection()
                .into(VehicleDatabase.TABLE_NAME)
                .where({ id: id })
                .update({
                    name: vehicle.getName(),
                    brand: vehicle.getbrand(),
                    model: vehicle.getModel(),
                    price: vehicle.getPrice(),
                    description: vehicle.getDescription(),
                    photo: vehicle.getPhoto()
                })



        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deleteVehicle = async (id: string) => {
        try {
            await BaseDatabase.connection
                .into(VehicleDatabase.TABLE_NAME)
                .where({ id: id })
                .del()
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }



}