/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `USUARIOS` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `USUARIOS` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `PASSAGEIROS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `assento` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `usuarioId` INTEGER NULL,
    `transporteId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `USUARIOS_cpf_key` ON `USUARIOS`(`cpf`);

-- CreateIndex
CREATE UNIQUE INDEX `USUARIOS_email_key` ON `USUARIOS`(`email`);

-- AddForeignKey
ALTER TABLE `PASSAGEIROS` ADD CONSTRAINT `PASSAGEIROS_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `USUARIOS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PASSAGEIROS` ADD CONSTRAINT `PASSAGEIROS_transporteId_fkey` FOREIGN KEY (`transporteId`) REFERENCES `TRANSPORTES`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
