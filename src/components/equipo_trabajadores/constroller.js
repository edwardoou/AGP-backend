import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const routerTest = Router();
const prisma = new PrismaClient();

//GET
routerTest.get("/workers", async (req, res) => {
  try {
    const acciones = await prisma.Trabajador.findMany({
      include: { projects: true },
    });
    res.status(200).json(acciones);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

export default routerTest;
