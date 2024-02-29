import { vehiculoRepository } from "../../domain/vehiculo-repository";

export class deleteVehiculos {
    constructor(readonly vehiculoRepository: vehiculoRepository) {}

    async run(id: number): Promise<void> {
        console.log("Vehículo ID:", id);
        try {
            await this.vehiculoRepository.delete(id);
            console.log("Vehículo eliminado exitosamente");
        } catch (error) {
            console.error("Error al eliminar vehículo:", error);
            throw new Error("Error al eliminar vehículo");
        }
    }
}
