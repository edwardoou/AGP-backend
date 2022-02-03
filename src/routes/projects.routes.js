import { Router } from "express";
import { createProject, getProjects } from "../controllers/projects.controller";

const router = Router();

//GET
router.get("/projects", getProjects);

//POST
router.post("/projects", createProject);

// GET BY ID
//router.get("/projects", );

//DELETE
//router.delete("/projects", );

//PUT
//router.put("/projects", );

export default router;
