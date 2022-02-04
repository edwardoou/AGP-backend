import { Router } from "express";
import {
  createActividad,
  deleteActividad,
  getActividadById,
  getActividades,
  updateActividad,
} from "../controllers/actividades.controller";

const router = Router();

//GET
router.get("/actividades", getActividades);

//POST
router.post("/actividades", createActividad);

// GET BY ID
router.get("/actividades/:id", getActividadById);

//DELETE
router.delete("/actividades/:id", deleteActividad);

//PUT
router.put("/actividades/:id", updateActividad);

export default router;
