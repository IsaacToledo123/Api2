import { Request, Response } from "express";
import { deleteVehiculos } from "../../app/methodsVehiculos/deleteVehiculos";

export class deleteController {
    constructor(readonly deleteVehiculo: deleteVehiculos) {}

    async run(req: Request, res: Response) {
        const vehiculoId = parseInt(req.params.id);
        console.log(vehiculoId);
        
        try {
            await this.deleteVehiculo.run(vehiculoId);
            console.log("Vehículo eliminado");
            res.status(200).send("Vehículo eliminado");
        } catch (error) {
            console.error("Error al eliminar vehículo:", error);
            res.status(500).send("Error al eliminar vehículo");
        }
    }
}
