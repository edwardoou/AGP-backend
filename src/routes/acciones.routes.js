import { Router } from "express";
import { createAccion, deleteAccion, getAccionById, getAcciones, updateAccion } from "../controllers/acciones.controller";

const router = Router();

//GET
router.get("/acciones", getAcciones);

//POST
router.post("/acciones", createAccion);

// GET BY ID
router.get("/acciones/:id", getAccionById);

//DELETE
router.delete("/acciones/:id", deleteAccion);

//PUT
router.put("/acciones/:id", updateAccion);

export default router;