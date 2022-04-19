/* Configuracion del servidor, y aloja a las variables del .env*/

import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 4000,
};
