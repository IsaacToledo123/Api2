import { Vehiculo } from "../../domain/vehiculo";

export interface Iservice {
    sendMessage2(vehiculo: Vehiculo):string;
}