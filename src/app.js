/* Archivo para configurar express */

import express from "express";
import config from "./config";
import projectsRoutes from "./routes/projects.routes";
import trabajadoresRoutes from "./routes/trabajadores.routes"

// objecto 'app' para config. express
const app = express();

//settings
app.set("port", config.port || 3000);
//middlewares para que express entienda data en json, y pueda recibir data en forms html
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//rutas
app.use(projectsRoutes);
app.use(trabajadoresRoutes);

export default app;
