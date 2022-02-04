import { getConnection, sql, queries } from "../database";

//GET
export const getActividades = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllActividades);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createActividad = async (req, res) => {
  const {
    nombre,
    responsable_id,
    responsabilidad,
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
      .input("responsable_id", sql.Int, responsable_id)
      .input("responsabilidad", sql.VarChar, responsabilidad)
      .input("descripcion", sql.VarChar, descripcion)
      .input("archivo", sql.Text, archivo)
      .input("fecha_limite", sql.Date, fecha_limite)
      .input("estado", sql.VarChar, estado)
      .input("projects_id", sql.Int, projects_id)
      .query(queries.addActividad);
    res.json({
      nombre,
      responsable_id,
      responsabilidad,
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
export const getActividadById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idactividades", id)
      .query(queries.getActividadesById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE
export const deleteActividad = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idactividades", id)
      .query(queries.deleteActividadesById);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//UPDATE
export const updateActividad = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    responsable_id,
    responsabilidad,
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
      .input("idactividades", id)
      .input("nombre", sql.VarChar, nombre)
      .input("responsable_id", sql.Int, responsable_id)
      .input("responsabilidad", sql.VarChar, responsabilidad)
      .input("descripcion", sql.VarChar, descripcion)
      .input("archivo", sql.Text, archivo)
      .input("fecha_limite", sql.Date, fecha_limite)
      .input("estado", sql.VarChar, estado)
      .input("projects_id", sql.Int, projects_id)
      .query(queries.updateActividad);
    res.json({
      id,
      nombre,
      responsable_id,
      responsabilidad,
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
