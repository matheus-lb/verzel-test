import { BaseDatabase } from "./BaseDatabase"


class Migrations extends BaseDatabase {

    private static users = {
        name: 'users_table',
        colunm1: 'id',
        colunm2: 'name',
        colunm3: 'email',
        colunm4: 'password'
    }

    private static vehicles = {
        name: 'vehicles_table',
        colunm1: 'id',
        colunm2: 'name',
        colunm3: 'brand',
        colunm4: 'model',
        colunm5: 'price',
        colunm6: 'description',
        colunm7:'photo'

    }

    async createTables() {
        try {

            await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${Migrations.users.name}(
            ${Migrations.users.colunm1} CHAR(255) PRIMARY KEY NOT NULL ,
            ${Migrations.users.colunm2} CHAR(255) NOT NULL,
            ${Migrations.users.colunm3} CHAR(255) NOT NULL,
            ${Migrations.users.colunm4} CHAR(255) NOT NULL
            );    

            CREATE TABLE IF NOT EXISTS ${Migrations.vehicles.name}(
                ${Migrations.vehicles.colunm1}  CHAR(255) PRIMARY KEY NOT NULL,
                ${Migrations.vehicles.colunm2} CHAR(255) NOT NULL,
                ${Migrations.vehicles.colunm3} CHAR(255) NOT NULL,
                ${Migrations.vehicles.colunm4} CHAR(255) NOT NULL,
                ${Migrations.vehicles.colunm5} CHAR(255) NOT NULL,
                ${Migrations.vehicles.colunm6} CHAR(255) NOT NULL,
                ${Migrations.vehicles.colunm7} CHAR(255) NOT NULL
                );   
            `)

            console.log('tabelas criadas')

        } catch (error: any) {
            console.log(error.message)
        }
    }

}

const migrations = new Migrations
migrations.createTables()


