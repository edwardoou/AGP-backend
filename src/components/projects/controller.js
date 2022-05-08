const fs = require("fs");
import { prisma } from "../../db";

//*GET
export const getProjects = async (req, res) => {
  try {
    const result = await prisma.project.findMany({
      include: {
        responsable: { select: { nombre: true } },
        equipo_trabajadores: {
          select: { trabajadores: { select: { nombre: true } } },
        },
        _count: true,
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

// TODO: Generar una condicional en caso no exista el id para el UPDATE de la foreign key(para acciones, trabajadores, equipo_trabajadores y projects)
//*POST
export const createProject = async (req, res) => {
  if (req.file) {
    //let localUrl = __dirname.replace(/\\/g, "/")
    const serverUrl = `${req.protocol}://${req.get("host")}/`;
    req.body.archivo = serverUrl + "uploads/" + req.file.filename;
  } else {
    req.body.archivo = null;
  }
  try {
    const workers = req.body.equipo_trabajadores.split(","); //["1", "2"];
    const result = await prisma.project.create({
      data: {
        ...req.body,
        responsable_id: Number(req.body.responsable_id),
        costo: Number(req.body.costo),
        fecha_identificacion: new Date(
          req.body.fecha_identificacion
        ).toISOString(),
        fecha_inicio: new Date(req.body.fecha_inicio).toISOString(),
        fecha_cierre: new Date(req.body.fecha_cierre).toISOString(),
        //*foreign table
        //Relacion para los ids de trabajadores en tabla equipo_trabajadores
        equipo_trabajadores: {
          create: workers.map((id) => ({
            trabajadores: {
              connect: {
                id: Number(id),
              },
            },
          })),
        },
      },
      include: {
        responsable: { select: { nombre: true } },
        equipo_trabajadores: {
          select: { trabajadores: { select: { nombre: true } } },
        },
        _count: true,
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//*GETBYID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        responsable: { select: { nombre: true } },
        equipo_trabajadores: {
          select: { trabajadores: { select: { id: true, nombre: true } } },
        },
        _count: true,
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*UPDATE
export const updateProject = async (req, res) => {
  const serverUrl = `${req.protocol}://${req.get("host")}/`;
  const { id } = req.params;

  //?Eliminar archivo antiguo
  const getProject = await prisma.project.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      archivo: true,
    },
  });
  if (getProject.archivo) {
    const archivo = getProject.archivo.split(serverUrl)[1];
    // eliminar un archivo
    fs.unlink(archivo, (err) => {
      if (err) {
        throw err;
      }
      console.log(`DELETED FILE -> ${archivo}`);
    });
  }

  //?Reemplazar por nuevo
  if (req.file) {
    //console.log(req.file);
    req.body.archivo = serverUrl + "uploads/" + req.file.filename;
  } else {
    req.body.archivo = null;
  }
  try {
    let workers = req.body.equipo_trabajadores.split(",");
    //Elimina las antiguas relaciones
    await prisma.equipoDeTrabajo.deleteMany({
      where: {
        project_id: Number(id),
      },
    });
    const result = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...req.body,
        responsable_id: Number(req.body.responsable_id),
        costo: Number(req.body.costo),
        fecha_identificacion: new Date(
          req.body.fecha_identificacion
        ).toISOString(),
        fecha_inicio: new Date(req.body.fecha_inicio).toISOString(),
        fecha_cierre: new Date(req.body.fecha_cierre).toISOString(),
        equipo_trabajadores: {
          create: workers.map((id) => ({
            trabajadores: {
              connect: {
                id: Number(id),
              },
            },
          })),
        },
      },
      include: {
        responsable: { select: { nombre: true } },
        equipo_trabajadores: {
          select: { trabajadores: { select: { nombre: true } } },
        },
        _count: true,
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*DELETE
export const deleteProject = async (req, res) => {
  try {
    const serverUrl = `${req.protocol}://${req.get("host")}/`;
    const { id } = req.params;
    const getProject = await prisma.project.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        archivo: true,
      },
    });
    //console.log(getProject);
    if (getProject.archivo) {
      const archivo = getProject.archivo.split(serverUrl)[1];
      // eliminar un archivo
      fs.unlink(archivo, (err) => {
        if (err) {
          throw err;
        }
        console.log(`DELETED FILE -> ${archivo}`);
      });
    }

    await prisma.project.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, data: error.message });
  }
};

//*TOTAL
export const getCountProjects = async (req, res) => {
  try {
    const result = await prisma.project.count();
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};

//*TOTAL PROYECTOS
export const getCountProyectos = async (req, res) => {
  try {
    const result = await prisma.project.count({
      where: {
        modelo: "Proyecto",
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};

//*TOTAL INNOVACIONES
export const getCountInnovaciones = async (req, res) => {
  try {
    const result = await prisma.project.count({
      where: {
        modelo: "Innovacion",
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};

//*TOTAL PROCESOS
export const getCountProcesos = async (req, res) => {
  try {
    const result = await prisma.project.count({
      where: {
        modelo: "Proceso",
      },
    });
    res.status(200).json({ ok: true, data: result });
  } catch (error) {
    res.status(500).send({ ok: false, data: error.message });
  }
};
