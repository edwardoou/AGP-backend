import { Router } from "express";
import * as controller from "./controller";

const router = Router();

//*RUTAS

//GET
router.route("/").get(controller.getEquipo);

export default router;
