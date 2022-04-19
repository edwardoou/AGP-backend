import { Router } from "express";
import * as controller from "./controller";

const path = require("path");
const DIR = "./uploads/";
import { v4 as uuidv4 } from "uuid";

/* --- MULTER START --- */
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
/* --- MULTER END --- */

const router = Router();

//GET
router.route("/").get(controller.getProjects);

//POST
router.route("/").post(upload.single("archivo"), controller.createProject);

// GET BY ID
router.route("/:id").get(controller.getProjectById);

//DELETE
router.route("/:id").delete(controller.deleteProject);

//PUT
router.route("/:id").put(upload.single("archivo"), controller.updateProject);

export default router;
