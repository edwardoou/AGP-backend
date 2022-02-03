import { Router } from "express";
import { createTrabajador,getTrabajadores } from "../controllers/trabajadores.controller";

const router = Router();

//GET
router.get("/trabajadores", getTrabajadores);

//POST
router.post("/trabajadores", createTrabajador);

// GET BY ID
//router.get("/projects", );

//DELETE
//router.delete("/projects", );

//PUT
//router.put("/projects", );

export default router;
