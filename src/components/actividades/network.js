import { Router } from "express";
import * as controller from "./controller";

const router = Router();

//*RUTAS

//GET
router.route("/").get(controller.getActividades);

//POST
router.route("/").post(controller.createActividad);

// GET BY ID
router.route("/show/:id").get(controller.getActividadById);

//DELETE
router.route("/delete/:id").delete(controller.deleteActividad);

//PUT
router.route("/update/:id").put(controller.updateActividad);

export default router;
