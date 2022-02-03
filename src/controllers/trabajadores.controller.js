import { getConnection, sql, queries } from "../database";

//GET
export const getTrabajadores = async (req, res) => {
  try {
    //llamar a la conexion
    const pool = await getConnection();
    //peticion a la db
    const result = await pool.request().query(queries.getAllTrabajadores);
    //retorna solo el recordset de la consulta
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createTrabajador = async (req, res) => {
  const { nombre, telefono, direccion, observaciones } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("observaciones", sql.Text, observaciones)
      .query(queries.addTrabajador);
    res.json({ nombre, telefono, direccion, observaciones });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//GET BY ID
export const getTrabajadorById = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.id, id)
      .query(queries.getTrabajadoresById);
    //porque es send y no json??? probar..
    res.send(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE
export const deleteTrabajador = async (req, res) => {
  try {
    const { id } = req.params;
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.id, id)
      .query(queries.deleteTrabajadorById);
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//TOTAL
export const getTotalTrabajadores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getCountTrabajadores);
    //retorna primer valor, luego el valor el String vacio
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//UPDATE
export const updateTrabajador = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, direccion, observaciones } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id", sql.id, id)
      .input("nombre", sql.VarChar, nombre)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("observaciones", sql.Text, observaciones)
      .query(queries.updateTrabajador);
    res.json({ id, nombre, telefono, direccion, observaciones });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
