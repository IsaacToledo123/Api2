import { Vehiculo } from "./vehiculo";

 export interface vehiculoRepository{
    createVehiculos(
        id: number,
        marca: String,
      ): Promise<Vehiculo | null>;
    getAllVehiculos():Promise < Vehiculo[] | null>
    delete(id:number):Promise <void> ;
}