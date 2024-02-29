import { createVehiculosController } from "./controllers/createVehiculosController";
import { getAllVehiculosController } from "./controllers/getAllVehiculos";
import { InMemoryVehiculo } from "./repository/in-memory-vehiculo";
import { getAllVehiculos } from "../app/methodsVehiculos/getAllVehiculos";
import { createVehiculos } from "../app/methodsVehiculos/create-vehiculo";
import { deleteController } from "./controllers/deleteController";
import { deleteVehiculos } from "../app/methodsVehiculos/deleteVehiculos";
import { INotificacionServices } from "../app/services/INotificacionService";
import { NotificationNewProduct } from "./servicesRabbitMQ/NotificationNewProduct";
import { ServicesNotification } from "./servicesRabbitMQ/notificaionSocket";

export const inMemoryVehiculo = new InMemoryVehiculo
export const GetAllVehiculos= new getAllVehiculos(inMemoryVehiculo) 
const notificationNewProduct= new NotificationNewProduct()
const notificacionService=new INotificacionServices(notificationNewProduct)
const servicesNotificatio=new ServicesNotification()

export const CreateVehiculo=new createVehiculos(inMemoryVehiculo,notificacionService,servicesNotificatio)
export const CreateVehiculosController =new createVehiculosController(CreateVehiculo)
export const GetAllVehiculosController=new getAllVehiculosController(GetAllVehiculos)


export const DeleteVehiculo=new deleteVehiculos(inMemoryVehiculo)
export const DeleteController=new deleteController(DeleteVehiculo)
