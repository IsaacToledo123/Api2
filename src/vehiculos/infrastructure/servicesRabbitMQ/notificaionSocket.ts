import io from "socket.io-client";
import { Vehiculo } from "../../domain/vehiculo";
import { Iservice } from "../../app/services/IService";

export class ServicesNotification implements Iservice {
  sendMessage2(vehiculo: Vehiculo): string {
    const socket = io("http://localhost:3005"); 

    socket.on("connect", () => {
      console.log("Connected to server");
      // Emitir el evento con el nombre correcto esperado por el servidor
      socket.emit("nuevoVehiculo", vehiculo);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
    return "Mensaje enviado";
  }
}
