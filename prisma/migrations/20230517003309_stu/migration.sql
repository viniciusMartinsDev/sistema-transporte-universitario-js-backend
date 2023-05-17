/*
  Warnings:

  - A unique constraint covering the columns `[renavam]` on the table `TRANSPORTES` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `TRANSPORTES_renavam_key` ON `TRANSPORTES`(`renavam`);
