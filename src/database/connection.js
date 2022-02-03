/* Conexion a la base de datos */

import sql from "mssql";
import config from "../config";

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // para azure
    trustServerCertificate: true, // true por estar en local dev / self-signed certs
  },
};

/* "await" espera a que una funcion "async" sea terminada o rechazada, funcionan juntos */

//conexion
export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    //para probar aca -> const result = await pool.request().query("SELECT 1");
    return pool;
  } catch (error) {
    console.error(error);
  }
}

//export el import de sql
export {sql};