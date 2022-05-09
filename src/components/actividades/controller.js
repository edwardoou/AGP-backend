import { prisma } from "../../db";

//*GET
export const getActividades = async (req, res) => {
  try {
    const result = await prisma.actividad.findMany({
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

//*POST
export const createActividad = async (req, res) => {
  try {
    const result = await prisma.actividad.create({
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

//*GET BY ID
export const getActividadById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.actividad.findUnique({
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

//*UPDATE
export const updateActividad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.actividad.update({
      where: {
        id: Number(id),
      },
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

//*DELETE
export const deleteActividad = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.actividad.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};
