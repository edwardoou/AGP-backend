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
// FIXME: No funciona la subida de archivos, probablemente incompatibilidad con multer
//*POST
export const createProject = async (req, res) => {
  //Llega con comillas
  if (
    !req.body.archivo ||
    req.body.archivo === "null" ||
    req.body.archivo === "undefined"
  ) {
    req.body.archivo;
  } else {
    //console.log(req.file);
    let serverUrl = req.protocol + "://" + req.get("host");
    req.body.archivo = serverUrl + "/uploads/" + req.file.filename;
  }
  try {
    let workers = req.body.equipo_trabajadores.split(","); //["1", "2"];
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

//*UPDATE
export const updateProject = async (req, res) => {
  const { id } = req.params;
  //Llega con comillas
  if (
    !req.body.archivo ||
    req.body.archivo === "null" ||
    req.body.archivo === "undefined"
  ) {
    req.body.archivo;
  } else {
    //console.log(req.file);
    let serverUrl = req.protocol + "://" + req.get("host");
    req.body.archivo = serverUrl + "/uploads/" + req.file.filename;
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
    const { id } = req.params;
    await prisma.project.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204);
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
