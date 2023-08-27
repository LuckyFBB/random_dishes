CREATE DATABASE IF NOT EXISTS `random_dishes`
USE `random_dishes`;

DROP TABLE IF EXISTS `dishes`;
CREATE TABLE `dishes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dish_name` varchar(45) NOT NULL,
  `catalog_id` int NOT NULL,
  `update_date` datetime DEFAULT NULL,
  `user_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dish_name_UNIQUE` (`dish_name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `dishes_catalog`;
CREATE TABLE `dishes_catalog` (
  `catalog_id` int NOT NULL AUTO_INCREMENT,
  `catalog_name` varchar(45) NOT NULL,
  `update_date` datetime NOT NULL,
  `catalog_emoji` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`catalog_id`),
  UNIQUE KEY `catalog_id_UNIQUE` (`catalog_id`),
  UNIQUE KEY `catalog_name_UNIQUE` (`catalog_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
