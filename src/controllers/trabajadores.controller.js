import { getConnection, sql } from "../database/connection";

//GET
export const getTrabajadores = async (req, res) => {
  try {
    //llamar a la conexion
    const pool = await getConnection();
    //peticion a la db
    const result = await pool
      .request()
      .query("SELECT * FROM agpdb.trabajadores");
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
      .query(
        "INSERT INTO agpdb.Trabajadores (nombre,telefono,direccion,observaciones) values(@nombre,@telefono,@direccion,@observaciones)"
      );
    res.json({ nombre, telefono, direccion, observaciones });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
