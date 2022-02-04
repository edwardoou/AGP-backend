export const queries = {
  //Trabajadores
  getAllTrabajadores: "SELECT * FROM [agpdb].[agpdb].[trabajadores]",
  addTrabajador:
    "INSERT INTO [agpdb].[agpdb].[trabajadores] (nombre,telefono,direccion,observaciones) values(@nombre,@telefono,@direccion,@observaciones)",
  getTrabajadoresById:
    "SELECT * FROM [agpdb].[agpdb].[trabajadores] WHERE idtrabajadores = @idtrabajadores",
  deleteTrabajadorById:
    "DELETE FROM [agpdb].[agpdb].[trabajadores] WHERE idtrabajadores= @idtrabajadores",
  getCountTrabajadores: "SELECT COUNT(*) FROM [agpdb].[agpdb].[trabajadores]",
  updateTrabajador:
    "UPDATE [agpdb].[agpdb].[trabajadores] SET nombre = @nombre, telefono = @telefono, direccion = @direccion, observaciones =@observaciones WHERE idtrabajadores = @idtrabajadores",
  //Projects
  getAllProjects: "SELECT * FROM [agpdb].[agpdb].[projects]",
  addProject:
    "INSERT INTO [agpdb].[agpdb].[projects]" +
    "(modelo,nombre,responsable_id,prioridad,tipo,responsabilidad,descripcion,costo,archivo,fecha_identificacion,fecha_inicio,fecha_cierre,estado,area_responsable,area_usuario) values" +
    "(@modelo,@nombre,@responsable_id,@prioridad,@tipo,@responsabilidad,@descripcion,@costo,@archivo,@fecha_identificacion,@fecha_inicio,@fecha_cierre,@estado,@area_responsable,@area_usuario)",
  getProjectsById:
    "SELECT * FROM [agpdb].[agpdb].[projects] WHERE idprojects = @idprojects",
  deleteProjectById:
    "DELETE FROM [agpdb].[agpdb].[projects] WHERE idprojects= @idprojects",
  updateProject:
    "UPDATE [agpdb].[agpdb].[projects] SET " +
    "modelo = @modelo ,nombre = @nombre ,responsable_id = @responsable_id ,prioridad=@prioridad,tipo = @tipo,responsabilidad = @responsabilidad,descripcion =@descripcion, " +
    "costo=@costo,archivo=@archivo,fecha_identificacion=@fecha_identificacion,fecha_inicio=@fecha_inicio,fecha_cierre=@fecha_cierre,estado=@estado,area_responsable=@area_responsable,area_usuario=@area_usuario " +
    "WHERE idprojects = @idprojects",
};
