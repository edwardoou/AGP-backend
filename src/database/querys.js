export const querys = {
  getAllProducts: "SELECT TOP(500) * FROM [webstore].[dbo].[Products]",
  getProducById: "SELECT * FROM Products Where Id = @Id",
  addNewProduct:
    "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
  deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
  getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
  updateProductById:
    "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
  getAllProjects: "SELECT * FROM agpdb.projects",
  addProject:
    "INSERT INTO agpdb.Projects (modelo,nombre,responsable_id,prioridad,tipo,responsabilidad,descripcion,costo,archivo,fecha_identificacion,fecha_inicio,fecha_cierre,estado,area_responsable,area_usuario) values(@modelo,@nombre,@responsable_id,@prioridad,@tipo,@responsabilidad,@descripcion,@costo,@archivo,@fecha_identificacion,@fecha_inicio,@fecha_cierre,@estado,@area_responsable,@area_usuario)",
};
