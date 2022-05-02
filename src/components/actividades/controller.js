import { prisma } from "../../db";

//*GET
export const getActividades = async (req, res) => {
  try {
    const result = await prisma.actividad.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*POST
export const createActividad = async (req, res) => {
  try {
    const result = await prisma.actividad.create({ data: req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
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
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*DELETE
export const deleteActividad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.actividad.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*UPDATE
export const updateActividad = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.actividad.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
