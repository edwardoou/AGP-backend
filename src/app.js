import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import projectsRoutes from "./routes/projects.routes";
import trabajadoresRoutes from "./routes/trabajadores.routes";
import accionesRoutes from "./routes/acciones.routes";
import actividadesRoutes from "./routes/actividades.routes";
import routerTest from "./controllers/test.constroller";

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
app.use(projectsRoutes);
app.use(trabajadoresRoutes);
app.use(accionesRoutes);
app.use(actividadesRoutes);
app.use(routerTest);

export default app;
