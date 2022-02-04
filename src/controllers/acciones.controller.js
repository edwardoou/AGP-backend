import { getConnection, sql, queries } from "../database";

//GET
export const getAcciones = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllAcciones);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createAccion = async (req, res) => {
  const {
    nombre,
    tipo,
    responsable_id,
    asistencia,
    descripcion,
    archivo,
    fecha_limite,
    estado,
    projects_id,
  } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("tipo", sql.VarChar, tipo)
      .input("responsable_id", sql.Int, responsable_id)
      .input("asistencia", sql.VarChar, asistencia)
      .input("descripcion", sql.VarChar, descripcion)
      .input("archivo", sql.Text, archivo)
      .input("fecha_limite", sql.Date, fecha_limite)
      .input("estado", sql.VarChar, estado)
      .input("projects_id", sql.Int, projects_id)
      .query(queries.addAccion);
    res.json({
      nombre,
      tipo,
      responsable_id,
      asistencia,
      descripcion,
      archivo,
      fecha_limite,
      estado,
      projects_id,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//GET BY ID
export const getAccionById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idacciones", id)
      .query(queries.getAccionesById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE
export const deleteAccion = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idacciones", id)
      .query(queries.deleteAccionesById);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//UPDATE
export const updateAccion = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    tipo,
    responsable_id,
    asistencia,
    descripcion,
    archivo,
    fecha_limite,
    estado,
    projects_id,
  } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idacciones", id)
      .input("nombre", sql.VarChar, nombre)
      .input("tipo", sql.VarChar, tipo)
      .input("responsable_id", sql.Int, responsable_id)
      .input("asistencia", sql.VarChar, asistencia)
      .input("descripcion", sql.VarChar, descripcion)
      .input("archivo", sql.Text, archivo)
      .input("fecha_limite", sql.Date, fecha_limite)
      .input("estado", sql.VarChar, estado)
      .input("projects_id", sql.Int, projects_id)
      .query(queries.updateAccion);
    res.json({
      id,
      nombre,
      tipo,
      responsable_id,
      asistencia,
      descripcion,
      archivo,
      fecha_limite,
      estado,
      projects_id,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
