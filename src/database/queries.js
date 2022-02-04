export const queries = {
  //Trabajadores
  getAllTrabajadores: "SELECT * FROM [agpdb].[agpdb].[trabajadores]",
  addTrabajador:
    "INSERT INTO agpdb.trabajadores (nombre,telefono,direccion,observaciones) values(@nombre,@telefono,@direccion,@observaciones)",
  getTrabajadoresById: "SELECT * FROM agpdb.trabajadores WHERE idtrabajadores = @idtrabajadores",
  deleteTrabajadorById: "DELETE FROM agpdb.trabajadores WHERE idtrabajadores= @idtrabajadores",
  getCountTrabajadores: "SELECT COUNT(*) FROM agpdb.trabajadores",
  updateTrabajador:
    "UPDATE agpdb.trabajadores SET nombre = @nombre, telefono = @telefono, direccion = @direccion, observaciones =@observaciones WHERE idtrabajadores = @idtrabajadores",
  //Projects
  getAllProjects: "SELECT * FROM agpdb.projects",
  addProject:
    "INSERT INTO agpdb.projects (modelo,nombre,responsable_id,prioridad,tipo,responsabilidad,descripcion,costo,archivo,fecha_identificacion,fecha_inicio,fecha_cierre,estado,area_responsable,area_usuario) values(@modelo,@nombre,@responsable_id,@prioridad,@tipo,@responsabilidad,@descripcion,@costo,@archivo,@fecha_identificacion,@fecha_inicio,@fecha_cierre,@estado,@area_responsable,@area_usuario)",
};
