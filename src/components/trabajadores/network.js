import { Router } from "express";
import * as controller from "./controller";

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

//*RUTAS

//GET
router.route("/").get(controller.getTrabajadores);

//POST
router.route("/").post(upload.single("foto"), controller.createTrabajador);

//TOTAL, las urls tipo string deben ir antes de la de tipo int.
router.route("/count").get(controller.getCountTrabajadores);

//GET BY ID
router.route("/:id").get(controller.getTrabajadorById);

//DELETE
router.route("/:id").delete(controller.deleteTrabajador);

//PUT
router.route("/:id").put(upload.single("foto"), controller.updateTrabajador);

export default router;
