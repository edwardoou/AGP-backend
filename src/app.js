import express from "express";
import cors from "cors";
import config from "./config";
import projectsRoutes from "./routes/projects.routes";
import trabajadoresRoutes from "./routes/trabajadores.routes";
import accionesRoutes from "./routes/acciones.routes";
import actividadesRoutes from "./routes/actividades.routes";

// objecto 'app' para config. express
const app = express();

/* settings */

//puerto del servidor
app.set("port", config.port);
//middlewares para que express entienda data en json, pueda recibir data en forms html y enviar archivos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Static
app.use("/uploads", express.static("uploads"));

//comunicacion por CORS
app.use(cors());
//rutas
app.use(projectsRoutes);
app.use(trabajadoresRoutes);
app.use(accionesRoutes);
app.use(actividadesRoutes);

export default app;
