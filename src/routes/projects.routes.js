import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  updateProject,
} from "../controllers/projects.controller";

const router = Router();

//GET
router.get("/projects", getProjects);

//POST
router.post("/projects", createProject);

// GET BY ID
router.get("/projects/:id", getProjectById);

//DELETE
router.delete("/projects/:id", deleteProject);

//PUT
router.put("/projects/:id", updateProject);

export default router;
