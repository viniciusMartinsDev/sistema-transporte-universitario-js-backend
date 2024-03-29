-- CreateTable
CREATE TABLE `LISTA_CONTROLE` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` BOOLEAN NOT NULL,
    `embarcado` BOOLEAN NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `usuarioId` INTEGER NULL,
    `transporteId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `LISTA_CONTROLE` ADD CONSTRAINT `LISTA_CONTROLE_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `USUARIOS`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LISTA_CONTROLE` ADD CONSTRAINT `LISTA_CONTROLE_transporteId_fkey` FOREIGN KEY (`transporteId`) REFERENCES `TRANSPORTES`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
