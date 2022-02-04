import { Router } from "express";
import {
  createTrabajador,
  getTrabajadores,
  getTrabajadorById,
  deleteTrabajador,
  getCountTrabajadores,
  updateTrabajador,
} from "../controllers/trabajadores.controller";

const router = Router();

//GET
router.get("/trabajadores", getTrabajadores);

//POST
router.post("/trabajadores", createTrabajador);

//TOTAL
router.get("/trabajadores/count", getCountTrabajadores);

// GET BY ID
router.get("/trabajadores/:id", getTrabajadorById);

//DELETE
router.delete("/trabajadores/:id", deleteTrabajador);

//PUT
router.put("/trabajadores/:id", updateTrabajador);

export default router;
