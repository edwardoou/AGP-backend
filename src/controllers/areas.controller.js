import { getConnection, sql, queries } from "../database";

//GET
export const getAreas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllAreas);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createArea = async (req, res) => {
  const { nombre, sede, empresa } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("sede", sql.VarChar, sede)
      .input("empresa", sql.VarChar, empresa)
      .query(queries.addArea);
    res.json({ nombre, sede, empresa });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//GET BY ID
export const getAreaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idareas", id)
      .query(queries.getAreasById);
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE
export const deleteArea = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool.request().input("idareas", id).query(queries.deleteAreasById);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//UPDATE
export const updateArea = async (req, res) => {
  const { id } = req.params;
  const { nombre, sede, empresa } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idareas", id)
      .input("nombre", sql.VarChar, nombre)
      .input("sede", sql.VarChar, sede)
      .input("empresa", sql.VarChar, empresa)
      .query(queries.updateArea);
    res.json({ id, nombre, sede, empresa });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
