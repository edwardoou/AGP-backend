import { Router } from "express";
import * as controller from "./controller";

const router = Router();

//*RUTAS

//GET
router.route("/").get(controller.getAcciones);

//POST
router.route("/").post(controller.createAccion);

// GET BY ID
router.route("/show/:id").get(controller.getAccionById);

//DELETE
router.route("/delete/:id").delete(controller.deleteAccion);

//PUT
router.route("/update/:id").put(controller.updateAccion);

export default router;
