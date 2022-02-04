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
  //Acciones
  getAllAcciones: "SELECT * FROM [agpdb].[agpdb].[acciones]",
  addAccion:
    "INSERT INTO [agpdb].[agpdb].[acciones]" +
    "(nombre,tipo,responsable_id,asistencia,descripcion,archivo,fecha_limite,estado,projects_id) values" +
    "(@nombre,@tipo,@responsable_id,@asistencia,@descripcion,@archivo,@fecha_limite,@estado,@projects_id)",
  getAccionesById:
    "SELECT * FROM [agpdb].[agpdb].[acciones] WHERE idacciones = @idacciones",
  deleteAccionesById:
    "DELETE FROM [agpdb].[agpdb].[acciones] WHERE idacciones= @idacciones",
  updateAccion:
    "UPDATE [agpdb].[agpdb].[acciones] SET " +
    "nombre=@nombre, tipo=@tipo, responsable_id=@responsable_id, asistencia=@asistencia, descripcion=@descripcion, archivo=@archivo,fecha_limite=@fecha_limite, estado=@estado, projects_id=@projects_id " +
    "WHERE idacciones = @idacciones",
  //Actividades
  getAllActividades: "SELECT * FROM [agpdb].[agpdb].[actividades]",
  addActividad:
    "INSERT INTO [agpdb].[agpdb].[actividades]" +
    "(nombre,responsable_id,responsabilidad,descripcion,archivo,fecha_limite,estado,projects_id) values" +
    "(@nombre,@responsable_id,@responsabilidad,@descripcion,@archivo,@fecha_limite,@estado,@projects_id)",
  getActividadesById:
    "SELECT * FROM [agpdb].[agpdb].[actividades] WHERE idactividades = @idactividades",
  deleteActividadesById:
    "DELETE FROM [agpdb].[agpdb].[actividades] WHERE idactividades = @idactividades",
  updateActividad:
    "UPDATE [agpdb].[agpdb].[actividades] SET " +
    "nombre=@nombre, responsable_id=@responsable_id, responsabilidad=@responsabilidad,descripcion=@descripcion, archivo=@archivo,fecha_limite=@fecha_limite, estado=@estado, projects_id=@projects_id " +
    "WHERE idactividades = @idactividades",
  //Areas
  getAllAreas: "SELECT * FROM [agpdb].[agpdb].[areas]",
  addArea:
    "INSERT INTO [agpdb].[agpdb].[areas] (nombre,sede, empresa) values (@nombre,@sede, @empresa)",
  getAreasById:
    "SELECT * FROM [agpdb].[agpdb].[areas] WHERE idareas = @idareas",
  deleteAreasById:
    "DELETE FROM [agpdb].[agpdb].[areas] WHERE idareas = @idareas",
  updateArea:
    "UPDATE [agpdb].[agpdb].[areas] SET nombre=@nombre, sede= @sede, empresa=@empresa WHERE idareas = @idareas",
};
