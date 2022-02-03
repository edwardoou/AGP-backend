export const queries = {
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  //Trabajadores
  getAllTrabajadores: "SELECT * FROM agpdb.trabajadores",
  addTrabajador:
    "INSERT INTO agpdb.trabajadores (nombre,telefono,direccion,observaciones) values(@nombre,@telefono,@direccion,@observaciones)",
  getTrabajadoresById: "SELECT * FROM agpd.trabajadores where id = @id",
  deleteTrabajadorById: "DELETE FROM trabajadores WHERE id= @id",
  getCountTrabajadores: "SELECT COUNT(*) FROM agpdb.trabajadores",
  updateTrabajador:
    "UPDATE trabajadores SET nombre = @nombre, telefono = @telefono, direccion = @direccion, observaciones =@observaciones WHERE id = @id",
  //Projects
  getAllProjects: "SELECT * FROM agpdb.projects",
  addProject:
    "INSERT INTO agpdb.projects (modelo,nombre,responsable_id,prioridad,tipo,responsabilidad,descripcion,costo,archivo,fecha_identificacion,fecha_inicio,fecha_cierre,estado,area_responsable,area_usuario) values(@modelo,@nombre,@responsable_id,@prioridad,@tipo,@responsabilidad,@descripcion,@costo,@archivo,@fecha_identificacion,@fecha_inicio,@fecha_cierre,@estado,@area_responsable,@area_usuario)",
};
