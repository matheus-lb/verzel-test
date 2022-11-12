export class Vehicle {

    constructor (
        private id: string,
        private name: string,
        private brand: string,
        private model: string,
        private price: string,
        private description: string,
        private photo:string
    ) {}

    public getId = (): string => {
        return this.id
    }
    
    public getName = (): string => {
        return this.name
    }

    public updateName = (name:string) =>{
        this.name = name
    }

    public getbrand = (): string => {
        return this.brand
    }

    public updateBrand = (brand:string) =>{
        this.brand = brand
    }

    public getModel = (): string => {
        return this.model
    }

    public updateModel = (model:string) =>{
        this.model = model
    }

    public getPrice = (): string => {
        return this.price
    }

    public updatePrice = (price:string) =>{
        this.price = price
    }

    public getDescription = (): string => {
        return this.description
    }

    public updateDescription = (description:string) =>{
        this.description = description
    }

    public getPhoto = (): string =>{
        return this.photo
    }

    public updatePhoto = (photo:string) =>{
        this.photo = photo
    }


    static toVehicleModel(vehicle: any): Vehicle {
        return new Vehicle(
            vehicle.id,
            vehicle.name,
            vehicle.brand,
            vehicle.model,
            vehicle.price,
            vehicle.description,
            vehicle.photo
        )
    }
    

}