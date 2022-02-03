import { Router } from "express";
import {
  createTrabajador,
  getTrabajadores,
  getTrabajadorById,
  deleteTrabajador,
  getTotalTrabajadores,
  updateTrabajador,
} from "../controllers/trabajadores.controller";

const router = Router();

//GET
router.get("/trabajadores", getTrabajadores);

//POST
router.post("/trabajadores", createTrabajador);

// GET BY ID
router.get("/trabajadores/:id", getTrabajadorById);

//TOTAL(OPCIONAL)
router.get("/trabajadores/count", getTotalTrabajadores);

//DELETE
router.delete("/trabajadores/:id", deleteTrabajador);

//PUT
router.put("/trabajadores/:id", updateTrabajador);

export default router;
