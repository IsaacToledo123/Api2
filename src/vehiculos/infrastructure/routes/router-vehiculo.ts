import express from "express";

import { CreateVehiculosController } from "../dependenciesVehiculos";
import { GetAllVehiculosController } from "../dependenciesVehiculos";
import { DeleteController } from "../dependenciesVehiculos";
export const vehiculoRouter = express.Router();

vehiculoRouter.get(
  "/",
  GetAllVehiculosController.run.bind(GetAllVehiculosController)
);

vehiculoRouter.post(
  "/",
  CreateVehiculosController.run.bind(CreateVehiculosController)
);

vehiculoRouter.delete('/:id',DeleteController.run.bind(DeleteController))