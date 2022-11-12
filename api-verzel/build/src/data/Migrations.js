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
const BaseDatabase_1 = require("./BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    createTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection.raw(`
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
            `);
                console.log('tabelas criadas');
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
}
Migrations.users = {
    name: 'users_table',
    colunm1: 'id',
    colunm2: 'name',
    colunm3: 'email',
    colunm4: 'password'
};
Migrations.vehicles = {
    name: 'vehicles_table',
    colunm1: 'id',
    colunm2: 'name',
    colunm3: 'brand',
    colunm4: 'model',
    colunm5: 'price',
    colunm6: 'description',
    colunm7: 'photo'
};
const migrations = new Migrations;
migrations.createTables();
//# sourceMappingURL=Migrations.js.map