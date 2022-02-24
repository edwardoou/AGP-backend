import { Router } from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
  updateProject,
} from "../controllers/projects.controller";

const path = require("path");
const DIR = "./uploads/";
import { v4 as uuidv4 } from "uuid";

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});
const upload = multer({ storage: storage });

const router = Router();

//GET
router.get("/projects", getProjects);

//POST
router.post("/projects", upload.single("archivo"), createProject);

// GET BY ID
router.get("/projects/:id", getProjectById);

//DELETE
router.delete("/projects/:id", deleteProject);

//PUT
router.put("/projects/:id", upload.single("archivo"), updateProject);

export default router;
