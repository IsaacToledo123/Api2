import "./load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";

import { vehiculoRouter } from "./vehiculos/infrastructure/routes/router-vehiculo";


function boostrap() {
  const app = express();
 
  app.use(bodyParser.json());

  app.use('/vehiculo',vehiculoRouter)


  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
