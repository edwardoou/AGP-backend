import { getConnection, sql, queries} from "../database";

//GET
export const getProjects = async (req, res) => {
  try {
    //llamar a la conexion
    const pool = await getConnection();
    //peticion a la db
    const result = await pool.request().query(queries.getAllProjects);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createProject = async (req, res) => {
  const {
    modelo,
    nombre,
    responsable_id,
    prioridad,
    tipo,
    responsabilidad,
    descripcion,
    costo,
    archivo,
    fecha_identificacion,
    fecha_inicio,
    fecha_cierre,
    estado,
    area_responsable,
    area_usuario,
  } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("modelo", sql.VarChar, modelo)
      .input("nombre", sql.VarChar, nombre)
      .input("responsable_id", sql.Int, responsable_id)
      .input("prioridad", sql.VarChar, prioridad)
      .input("tipo", sql.VarChar, tipo)
      .input("responsabilidad", sql.VarChar, responsabilidad)
      .input("descripcion", sql.Text, descripcion)
      .input("costo", sql.Decimal, costo)
      .input("archivo", sql.VarChar, archivo)
      .input("fecha_identificacion", sql.Date, fecha_identificacion)
      .input("fecha_inicio", sql.Date, fecha_inicio)
      .input("fecha_cierre", sql.Date, fecha_cierre)
      .input("estado", sql.VarChar, estado)
      .input("area_responsable", sql.Int, area_responsable)
      .input("area_usuario", sql.Int, area_usuario)
      .query(queries.addProject);
    res.json({
      modelo,
      nombre,
      responsable_id,
      prioridad,
      tipo,
      responsabilidad,
      descripcion,
      costo,
      archivo,
      fecha_identificacion,
      fecha_inicio,
      fecha_cierre,
      estado,
      area_responsable,
      area_usuario,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
