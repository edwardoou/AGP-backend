import { prisma } from "../../db";

//*GET
export const getProjects = async (req, res) => {
  try {
    const result = await prisma.project.findMany({
      include: {
        responsable: { include: { nombre: true } },
      },
      equipo_trabajadores: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO: Revisar ya que antes daba un aray por defecto el select multiple de material UI, quiza nos ahorre chamba
// TODO: Generar una condicional en caso no exista el id de la foreign key(para acciones, trabajadores, equipo_trabajadores y projects)
// FIXME: No funciona la subida de archivos, probablemente incompatibilidad con multer
//TODO: Pensar como debe ingresar los ids para trabajador https://www.google.com/search?q=add+many+to+many+prisma&oq=add+many+to+many+prisma&aqs=chrome..69i57.3001j0j1&sourceid=chrome&ie=UTF-8
//*POST
export const createProject = async (req, res) => {
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
    req.body.responsable_id = Number(req.body.responsable_id);
    req.body.costo = Number(req.body.costo);
    let identificacion = new Date(req.body.fecha_identificacion);
    let inicio = new Date(req.body.fecha_inicio);
    let cierre = new Date(req.body.fecha_cierre);
    req.body.fecha_identificacion = identificacion.toISOString();
    req.body.fecha_inicio = inicio.toISOString();
    req.body.fecha_cierre = cierre.toISOString();
    let equipo = req.body.equipo_trabajadores.split(",");
    //const team2 = ["1", "2"];
    const result = await prisma.project.create({
      data: {
        ...req.body,
        equipo_trabajadores: {
          create: equipo.map((id) => ({
            trabajador_id: Number(id),
          })),
        },
      },
      include: {
        equipo_trabajadores: true,
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
      include: { equipo_trabajadores: true },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//? El set es perfecto para el update https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#set
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
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};
