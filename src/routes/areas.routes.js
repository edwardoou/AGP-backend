import { Router } from "express";
import {
  createArea,
  deleteArea,
  getAreaById,
  getAreas,
  updateArea,
} from "../controllers/areas.controller";

const router = Router();

//GET
router.get("/areas", getAreas);

//POST
router.post("/areas", createArea);

// GET BY ID
router.get("/areas/:id", getAreaById);

//DELETE
router.delete("/areas/:id", deleteArea);

//PUT
router.put("/areas/:id", updateArea);

export default router;
