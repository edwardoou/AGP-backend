import { Router } from "express";

const router = Router();

//GET
router.route("/:file").get((req, res) => {
  const { file } = req.params;
  res.download(`uploads/${file}`);
});

export default router;
