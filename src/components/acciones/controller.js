import { prisma } from "../../db";

//GET
export const getAcciones = async (req, res) => {
  try {
    const result = await prisma.accion.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//POST
export const createAccion = async (req, res) => {
  try {
    const result = await prisma.accion.create({ data: req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//GET BY ID
export const getAccionById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.accion.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//DELETE
export const deleteAccion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.accion.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//UPDATE
export const updateAccion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.accion.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
