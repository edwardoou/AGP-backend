import { getConnection, sql } from "../../database";

//GET
export const getTrabajadores = async (req, res) => {
  try {
    //llamar a la conexion
    const pool = await getConnection();
    //peticion a la db
    const result = await pool.request().execute("agpdb.getAllTrabajadores");
    //retorna solo el recordset de la consulta
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//POST
export const createTrabajador = async (req, res) => {
  let serverUrl = req.protocol + "://" + req.get("host");
  /* console.log(req.file); */
  const {
    foto = serverUrl + "/uploads/" + req.file.filename,
    nombre,
    telefono,
    direccion,
    observacion,
    sexo,
    fecha_nacimiento,
    fecha_ingreso,
    fecha_cese,
    categoria,
    sede,
    area,
    puesto,
    empresa,
  } = req.body;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("foto", sql.VarChar, foto)
      .input("nombre", sql.VarChar, nombre)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("observacion", sql.VarChar, observacion)
      .input("sexo", sql.VarChar, sexo)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("fecha_ingreso", sql.Date, fecha_ingreso)
      .input("fecha_cese", fecha_cese)
      .input("categoria", sql.VarChar, categoria)
      .input("sede", sql.VarChar, sede)
      .input("area", sql.VarChar, area)
      .input("puesto", sql.VarChar, puesto)
      .input("empresa", sql.VarChar, empresa)
      .execute("agpdb.addTrabajadores");
    res.json({
      foto,
      nombre,
      telefono,
      direccion,
      observacion,
      sexo,
      fecha_nacimiento,
      fecha_ingreso,
      fecha_cese,
      categoria,
      sede,
      area,
      puesto,
      empresa,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//GET BY ID
export const getTrabajadorById = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      //.input(name,value)
      .input("idtrabajadores", id)
      .execute("agpdb.getByIdTrabajadores");
    //res.send y json son lo mismo, "json" convierte todo a json usando el send
    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//DELETE
export const deleteTrabajador = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idtrabajadores", id)
      .execute("agpdb.deleteTrabajadores");
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//TOTAL
export const getCountTrabajadores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().execute("agpdb.getCountTrabajadores");
    //retorna primer valor, luego el valor el String vacio
    res.json(result.recordset[0][""]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//UPDATE
export const updateTrabajador = async (req, res) => {
  let serverUrl = req.protocol + "://" + req.get("host");
  /* console.log(req.file); */
  const { id } = req.params;
  const {
    foto = serverUrl + "/uploads/" + req.file.filename,
    nombre,
    telefono,
    direccion,
    observacion,
    sexo,
    fecha_nacimiento,
    fecha_ingreso,
    fecha_cese,
    categoria,
    sede,
    area,
    puesto,
    empresa,
  } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("idtrabajadores", id)
      .input("foto", sql.VarChar, foto)
      .input("nombre", sql.VarChar, nombre)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("observacion", sql.VarChar, observacion)
      .input("sexo", sql.VarChar, sexo)
      .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
      .input("fecha_ingreso", sql.Date, fecha_ingreso)
      .input("fecha_cese", fecha_cese)
      .input("categoria", sql.VarChar, categoria)
      .input("sede", sql.VarChar, sede)
      .input("area", sql.VarChar, area)
      .input("puesto", sql.VarChar, puesto)
      .input("empresa", sql.VarChar, empresa)
      .execute("agpdb.updateTrabajadores");
    res.json({
      id,
      foto,
      nombre,
      telefono,
      direccion,
      observacion,
      sexo,
      fecha_nacimiento,
      fecha_ingreso,
      fecha_cese,
      categoria,
      sede,
      area,
      puesto,
      empresa,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
