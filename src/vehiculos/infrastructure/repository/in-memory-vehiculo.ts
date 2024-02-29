import { query } from "../../../dataBase/mysql";
import { Vehiculo } from "../../domain/vehiculo";
import { vehiculoRepository } from "../../domain/vehiculo-repository";

export class InMemoryVehiculo implements vehiculoRepository {

  async createVehiculos(id: number, marca: string): Promise<Vehiculo | null> {
    const sql =
      "INSERT INTO vehiculos1 (id,marca) VALUES (?, ?)";
    const params: any[] = [id, marca];
    try {
      const [result]: any = await query(sql, params);
      return new Vehiculo(id, marca );
    } catch (error) {
      return null;
    }
  }


  async getAllVehiculos(): Promise<Vehiculo[] | null> {
    const sql = "SELECT * FROM vehiculos1"
    try {
      const [data]: any = await query(sql, [])
      const dataVehiculos = Object.values(JSON.parse(JSON.stringify(data)));
      return dataVehiculos.map(
        (product: any) =>
          new Vehiculo(
            product.id,
            product.marca,
          )
      );
    } catch (error) {
      return null
    }
  }
  async delete(id: number): Promise<void> {
    const sql = "DELETE FROM vehiculos1 WHERE id = ?";
    const params: any[] = [id];
    try {
        await query(sql, params);
        console.log("Vehículo eliminado correctamente");
    } catch (error) {
        console.error("Error al eliminar vehículo:", error);
        throw new Error("Error al eliminar vehículo");
    }
}



}
