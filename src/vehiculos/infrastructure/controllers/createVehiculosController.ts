import { Request, Response } from "express";
import { createVehiculos } from "../../app/methodsVehiculos/create-vehiculo";

export class createVehiculosController {
  constructor(readonly createVehiculos: createVehiculos) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const vehiculo = await this.createVehiculos.run(
        data.id,
        data.marca,
      );

      if (vehiculo){
        res.status(201).send({
          status: "success",
          data: {
            id: vehiculo?.id,
            marca: vehiculo?.marca,
        
          },
        });
        console.log(vehiculo);
        
      }
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}
