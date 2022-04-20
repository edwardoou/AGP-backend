BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[PROJECTS] (
    [id] INT NOT NULL IDENTITY(1,1),
    [modelo] NVARCHAR(20),
    [nombre] NVARCHAR(100),
    [prioridad] NVARCHAR(10),
    [tipo] NVARCHAR(20),
    [responsabilidad] NVARCHAR(20),
    [descripcion] NVARCHAR(500),
    [costo] DECIMAL(10,2),
    [archivo] NVARCHAR(200),
    [fecha_identificacion] DATE,
    [fecha_inicio] DATE,
    [fecha_cierre] DATE,
    [estado] NVARCHAR(20),
    [area_usuario] NVARCHAR(80),
    [area_responsable] NVARCHAR(80),
    [empresa_usuario] NVARCHAR(15),
    [empresa_responsable] NVARCHAR(15),
    [sede_usuario] NVARCHAR(10),
    [sede_responsable] NVARCHAR(10),
    [responsable_id] INT NOT NULL,
    CONSTRAINT [PROJECTS_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[TRABAJADORES] (
    [id] INT NOT NULL IDENTITY(1,1),
    [foto] NVARCHAR(100),
    [nombre] NVARCHAR(100),
    [telefono] NVARCHAR(15),
    [direccion] NVARCHAR(100),
    [observacion] NVARCHAR(500),
    [sexo] NVARCHAR(10),
    [fecha_nacimiento] DATE,
    [fecha_ingreso] DATE,
    [fecha_cese] DATE,
    [categoria] NVARCHAR(100),
    [sede] NVARCHAR(45),
    [area] NVARCHAR(80),
    [puesto] NVARCHAR(100),
    [empresa] NVARCHAR(15),
    CONSTRAINT [TRABAJADORES_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[EQUIPO_DE_TRABAJO] (
    [trabajador_id] INT NOT NULL,
    [project_id] INT NOT NULL,
    CONSTRAINT [EQUIPO_DE_TRABAJO_pkey] PRIMARY KEY ([trabajador_id],[project_id])
);

-- CreateTable
CREATE TABLE [dbo].[ACCIONES] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(100),
    [tipo] NVARCHAR(20),
    [asistencia] NVARCHAR(50),
    [descripcion] NVARCHAR(500),
    [archivo] NVARCHAR(200),
    [fecha_limite] DATE,
    [estado] NVARCHAR(100),
    [project_id] INT NOT NULL,
    [responsable_id] INT NOT NULL,
    CONSTRAINT [ACCIONES_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ACTIVIDADES] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(100),
    [responsabilidad] NVARCHAR(10),
    [descripcion] NVARCHAR(500),
    [archivo] NVARCHAR(200),
    [fecha_limite] DATE,
    [estado] NVARCHAR(100),
    [project_id] INT NOT NULL,
    [responsable_id] INT NOT NULL,
    CONSTRAINT [ACTIVIDADES_pkey] PRIMARY KEY ([id])
);

-- CreateIndex
CREATE INDEX [PROJECTS_responsable_id_idx] ON [dbo].[PROJECTS]([responsable_id]);

-- CreateIndex
CREATE INDEX [EQUIPO_DE_TRABAJO_project_id_idx] ON [dbo].[EQUIPO_DE_TRABAJO]([project_id]);

-- CreateIndex
CREATE INDEX [EQUIPO_DE_TRABAJO_trabajador_id_idx] ON [dbo].[EQUIPO_DE_TRABAJO]([trabajador_id]);

-- CreateIndex
CREATE INDEX [ACCIONES_project_id_idx] ON [dbo].[ACCIONES]([project_id]);

-- CreateIndex
CREATE INDEX [ACCIONES_responsable_id_idx] ON [dbo].[ACCIONES]([responsable_id]);

-- CreateIndex
CREATE INDEX [ACTIVIDADES_project_id_idx] ON [dbo].[ACTIVIDADES]([project_id]);

-- CreateIndex
CREATE INDEX [ACTIVIDADES_responsable_id_idx] ON [dbo].[ACTIVIDADES]([responsable_id]);

-- AddForeignKey
ALTER TABLE [dbo].[PROJECTS] ADD CONSTRAINT [PROJECTS_responsable_id_fkey] FOREIGN KEY ([responsable_id]) REFERENCES [dbo].[TRABAJADORES]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EQUIPO_DE_TRABAJO] ADD CONSTRAINT [EQUIPO_DE_TRABAJO_project_id_fkey] FOREIGN KEY ([project_id]) REFERENCES [dbo].[PROJECTS]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[EQUIPO_DE_TRABAJO] ADD CONSTRAINT [EQUIPO_DE_TRABAJO_trabajador_id_fkey] FOREIGN KEY ([trabajador_id]) REFERENCES [dbo].[TRABAJADORES]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ACCIONES] ADD CONSTRAINT [ACCIONES_project_id_fkey] FOREIGN KEY ([project_id]) REFERENCES [dbo].[PROJECTS]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ACCIONES] ADD CONSTRAINT [ACCIONES_responsable_id_fkey] FOREIGN KEY ([responsable_id]) REFERENCES [dbo].[TRABAJADORES]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ACTIVIDADES] ADD CONSTRAINT [ACTIVIDADES_project_id_fkey] FOREIGN KEY ([project_id]) REFERENCES [dbo].[PROJECTS]([id]) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ACTIVIDADES] ADD CONSTRAINT [ACTIVIDADES_responsable_id_fkey] FOREIGN KEY ([responsable_id]) REFERENCES [dbo].[TRABAJADORES]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
