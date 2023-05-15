/*
  Warnings:

  - Added the required column `destino` to the `TRANSPORTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodo` to the `TRANSPORTES` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saida` to the `TRANSPORTES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `TRANSPORTES` ADD COLUMN `destino` VARCHAR(191) NOT NULL,
    ADD COLUMN `periodo` VARCHAR(191) NOT NULL,
    ADD COLUMN `saida` VARCHAR(191) NOT NULL;
