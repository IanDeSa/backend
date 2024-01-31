-- CreateTable
CREATE TABLE `dispositivos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `imagem` LONGTEXT NOT NULL,
    `habilitado` BOOLEAN NOT NULL,
    `categoria` ENUM('Smart', 'Tag', 'Mini', 'Totem') NOT NULL DEFAULT 'Smart',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
