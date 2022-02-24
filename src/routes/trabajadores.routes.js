import { Router } from "express";
import {
  createTrabajador,
  getTrabajadores,
  getTrabajadorById,
  deleteTrabajador,
  getCountTrabajadores,
  updateTrabajador,
} from "../controllers/trabajadores.controller";

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
router.get("/trabajadores", getTrabajadores);

//POST
router.post("/trabajadores", upload.single("foto"), createTrabajador);

//TOTAL, las urls tipo string deben ir antes de la de tipo int.
router.get("/trabajadores/count", getCountTrabajadores);

// GET BY ID
router.get("/trabajadores/:id", getTrabajadorById);

//DELETE
router.delete("/trabajadores/:id", deleteTrabajador);

//PUT
router.put("/trabajadores/:id", upload.single("foto"), updateTrabajador);

export default router;
