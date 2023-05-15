/*
  Warnings:

  - A unique constraint covering the columns `[rg]` on the table `USUARIOS` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `USUARIOS_rg_key` ON `USUARIOS`(`rg`);
