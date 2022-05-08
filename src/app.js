import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";

import {
  acciones,
  actividades,
  projects,
  trabajadores,
  equipo_trabajadores,
  archivo,
} from "./components";

// objecto 'app' para config. express
const app = express();

//puerto del servidor
app.set("port", config.port);
//* middlewares
app.use(morgan("dev")); //Muestra por consola lo que llega al servidor
app.use(express.json()); //Express entienda data en json
app.use(express.urlencoded({ extended: false })); //Express recibir data en forms html y enviar archivos

//Acceso a archivos directamente
app.use("/uploads", express.static("uploads"));

//comunicacion por CORS
app.use(cors());

//* rutas
app.use("/acciones", acciones);
app.use("/projects", projects);
app.use("/trabajadores", trabajadores);
app.use("/actividades", actividades);
app.use("/equipo", equipo_trabajadores);
app.use("/descarga", archivo);

export default app;
