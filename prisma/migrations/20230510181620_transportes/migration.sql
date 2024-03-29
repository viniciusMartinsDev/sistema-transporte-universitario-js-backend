-- CreateTable
CREATE TABLE `TRANSPORTES` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(191) NOT NULL,
    `renavam` VARCHAR(191) NOT NULL,
    `numPoltronas` VARCHAR(191) NOT NULL,
    `numPoltronasOcupadas` VARCHAR(191) NOT NULL,
    `numPoltronasLivres` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `marcas` VARCHAR(191) NOT NULL,
    `usuarioId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TRANSPORTES` ADD CONSTRAINT `TRANSPORTES_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `USUARIOS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
