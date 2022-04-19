import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//*GET
export const getTrabajadores = async (req, res) => {
  try {
    const result = await prisma.trabajador.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*POST
export const createTrabajador = async (req, res) => {
  try {
    if (!req.body.foto) {
      req.body.foto;
    } else {
      //console.log(req.file);
      let serverUrl = req.protocol + "://" + req.get("host");
      req.body.foto = serverUrl + "/uploads/" + req.file.filename;
    }
    const result = await prisma.trabajador.create({ data: req.body });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*GET BY ID
export const getTrabajadorById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.trabajador.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*TOTAL
export const getCountTrabajadores = async (req, res) => {
  try {
    const result = await prisma.trabajador.count();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*UPDATE
export const updateTrabajador = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.foto) {
      req.body.foto;
    } else {
      //console.log(req.file);
      let serverUrl = req.protocol + "://" + req.get("host");
      req.body.foto = serverUrl + "/uploads/" + req.file.filename;
    }
    const result = await prisma.trabajador.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*DELETE
export const deleteTrabajador = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.trabajador.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
