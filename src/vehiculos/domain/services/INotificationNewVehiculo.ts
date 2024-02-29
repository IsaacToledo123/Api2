import { Vehiculo } from "../vehiculo";

export interface INotificationNewVehiculo{
    sendNotification(vehiculo:Vehiculo):Promise<boolean>
}
//