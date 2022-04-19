import { Router } from "express";
import * as controller from "./controller";

const router = Router();

//*RUTAS

//GET
router.route("/").get(controller.getAcciones);

//POST
router.route("/").post(controller.createAccion);

// GET BY ID
router.route("/:id").get(controller.getAccionById);

//DELETE
router.route("/:id").delete(controller.deleteAccion);

//PUT
router.route("/:id").put(controller.updateAccion);

export default router;
