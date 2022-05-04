import { prisma } from "../../db";

//*GET
export const getTrabajadores = async (req, res) => {
  try {
    const result = await prisma.trabajador.findMany({
      include: {
        _count: true,
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*POST
export const createTrabajador = async (req, res) => {
  //console.log(req.file);
  if (!req.file) {
    req.body.foto = null;
  } else {
    //Que mejor sea base 64
    let serverUrl = req.protocol + "://" + req.get("host");
    req.body.foto = serverUrl + "/uploads/" + req.file.filename;
  }
  if (req.body.fecha_cese) {
    req.body.fecha_cese = new Date(req.body.fecha_cese).toISOString();
  } else {
    req.body.fecha_cese = null;
  }
  try {
    const result = await prisma.trabajador.create({
      data: {
        ...req.body,
        fecha_nacimiento: new Date(req.body.fecha_nacimiento).toISOString(),
        fecha_ingreso: new Date(req.body.fecha_ingreso).toISOString(),
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      include: {
        _count: true,
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*UPDATE
export const updateTrabajador = async (req, res) => {
  //Llega con comillas
  if (
    !req.body.foto ||
    req.body.foto === "null" ||
    req.body.foto === "undefined"
  ) {
    req.body.foto;
  } else {
    //console.log(req.file);
    let serverUrl = req.protocol + "://" + req.get("host");
    req.body.foto = serverUrl + "/uploads/" + req.file.filename;
  }
  try {
    const result = await prisma.trabajador.update({
      where: { id: Number(id) },
      data: {
        ...req.body,
        fecha_nacimiento: new Date(req.body.fecha_nacimiento).toISOString(),
        fecha_ingreso: new Date(req.body.fecha_ingreso).toISOString(),
        fecha_cese: new Date(req.body.fecha_cese).toISOString(),
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*DELETE
//Ya que es trabajador mejor es no eliminar, solo poner su fecha de cese y listo
export const deleteTrabajador = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.trabajador.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};

//*TOTAL
export const getCountTrabajadores = async (req, res) => {
  try {
    const result = await prisma.trabajador.count();
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};
