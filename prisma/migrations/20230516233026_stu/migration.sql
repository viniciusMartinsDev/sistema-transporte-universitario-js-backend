/*
  Warnings:

  - You are about to alter the column `status` on the `PASSAGEIROS` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - A unique constraint covering the columns `[usuarioId]` on the table `LISTA_CONTROLE` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transporteId]` on the table `LISTA_CONTROLE` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `PASSAGEIROS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[transporteId]` on the table `PASSAGEIROS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuarioId]` on the table `TRANSPORTES` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `PASSAGEIROS` MODIFY `status` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `LISTA_CONTROLE_usuarioId_key` ON `LISTA_CONTROLE`(`usuarioId`);

-- CreateIndex
CREATE UNIQUE INDEX `LISTA_CONTROLE_transporteId_key` ON `LISTA_CONTROLE`(`transporteId`);

-- CreateIndex
CREATE UNIQUE INDEX `PASSAGEIROS_usuarioId_key` ON `PASSAGEIROS`(`usuarioId`);

-- CreateIndex
CREATE UNIQUE INDEX `PASSAGEIROS_transporteId_key` ON `PASSAGEIROS`(`transporteId`);

-- CreateIndex
CREATE UNIQUE INDEX `TRANSPORTES_usuarioId_key` ON `TRANSPORTES`(`usuarioId`);
