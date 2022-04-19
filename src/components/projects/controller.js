import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//*GET
export const getProjects = async (req, res) => {
  try {
    const result = await prisma.project.findMany({
      include: { equipo_trabajadores: true },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// TODO: Generar una condicional en caso no exista el id de la foreign key(para acciones, trabajadores, equipo_trabajadores y projects)

//TODO: Pensar como debe ingresar los ids para trabajador https://www.google.com/search?q=add+many+to+many+prisma&oq=add+many+to+many+prisma&aqs=chrome..69i57.3001j0j1&sourceid=chrome&ie=UTF-8
//*POST
export const createProject = async (req, res) => {
  try {
    if (!req.body.archivo) {
      req.body.archivo;
    } else {
      //console.log(req.file);
      let serverUrl = req.protocol + "://" + req.get("host");
      req.body.archivo = serverUrl + "/uploads/" + req.file.filename;
    }
    const result = await prisma.project.create({
      data: {
        ...req.body,
        equipo_trabajadores: {
          create: [{ trabajador_id: 1 }, { trabajador_id: 2 }],
        },
      },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.message);
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
      include: { equipo_trabajadores: true },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*UPDATE
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.archivo) {
      req.body.archivo;
    } else {
      //console.log(req.file);
      let serverUrl = req.protocol + "://" + req.get("host");
      req.body.archivo = serverUrl + "/uploads/" + req.file.filename;
    }
    const result = await prisma.project.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//*DELETE
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.project.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(204).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
