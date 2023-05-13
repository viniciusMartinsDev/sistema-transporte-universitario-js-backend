/*
  Warnings:

  - You are about to drop the column `marcas` on the `TRANSPORTES` table. All the data in the column will be lost.
  - You are about to drop the column `numPoltronasOcupadas` on the `TRANSPORTES` table. All the data in the column will be lost.
  - You are about to alter the column `numPoltronas` on the `TRANSPORTES` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `numPoltronasLivres` on the `TRANSPORTES` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[placa]` on the table `TRANSPORTES` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `marca` to the `TRANSPORTES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TRANSPORTES` DROP COLUMN `marcas`,
    DROP COLUMN `numPoltronasOcupadas`,
    ADD COLUMN `marca` VARCHAR(191) NOT NULL,
    MODIFY `numPoltronas` INTEGER NOT NULL,
    MODIFY `numPoltronasLivres` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TRANSPORTES_placa_key` ON `TRANSPORTES`(`placa`);
