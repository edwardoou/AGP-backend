/*
  Warnings:

  - You are about to alter the column `foto` on the `TRABAJADORES` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(100)` to `VarChar(Max)`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[TRABAJADORES] ALTER COLUMN [foto] VARCHAR(max) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
