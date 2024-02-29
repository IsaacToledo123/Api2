import { Vehiculo } from "../../domain/vehiculo";
import { NotificationNewProduct } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";


export class INotificacionServices{
constructor(readonly serviceNotification:NotificationNewProduct){ }
       async run (vehiculo:Vehiculo){
        await this.serviceNotification.sendNotification(vehiculo);
        
}
}