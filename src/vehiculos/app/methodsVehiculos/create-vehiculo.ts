import { Vehiculo } from "../../domain/vehiculo";
import { vehiculoRepository } from "../../domain/vehiculo-repository";
import { INotificacionServices } from "../services/INotificacionService";
import { Iservice } from "../services/IService";
export class createVehiculos   {
  constructor(readonly vehiculoRepository: vehiculoRepository  ,readonly notificacion: INotificacionServices,readonly servicio:Iservice) {}

  async run(
    id: number,
    marca: string,
  ): Promise<Vehiculo | null> {
    try {
      const vehiculo:any = await this.vehiculoRepository.createVehiculos(
        id,
        marca,
      );
      this.notificacion.run(vehiculo)
      this.servicio.sendMessage2(vehiculo)
      return vehiculo;
    } catch (error) {
      return null;
    }
  }
}
