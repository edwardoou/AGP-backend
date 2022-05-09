import { prisma } from "../../db";

//GET
export const getAcciones = async (req, res) => {
  try {
    const result = await prisma.accion.findMany({
      include: {
        projects: { select: { nombre: true } },
        trabajadores: { select: { nombre: true } },
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//POST
export const createAccion = async (req, res) => {
  try {
    const result = await prisma.accion.create({
      data: req.body,
      include: {
        projects: { select: { nombre: true } },
        trabajadores: { select: { nombre: true } },
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
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
      include: {
        projects: { select: { nombre: true } },
        trabajadores: { select: { nombre: true } },
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//UPDATE
export const updateAccion = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.accion.update({
      where: { id: Number(id) },
      data: req.body,
      include: {
        projects: { select: { nombre: true } },
        trabajadores: { select: { nombre: true } },
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//DELETE
export const deleteAccion = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.accion.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};
