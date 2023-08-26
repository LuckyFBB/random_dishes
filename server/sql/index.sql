CREATE TABLE `random_dishes`.`dishes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dish_name` VARCHAR(45) NOT NULL,
  `catalog_id` INT NOT NULL,
  `update_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `dish_name_UNIQUE` (`dish_name` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

CREATE TABLE `random_dishes`.`dishes_catalog` (
  `catalog_id` INT NOT NULL,
  `catalog_name` VARCHAR(45) NOT NULL,
  `update_date` DATETIME NOT NULL,
  PRIMARY KEY (`catalog_id`),
  UNIQUE INDEX `catalog_id_UNIQUE` (`catalog_id` ASC) VISIBLE,
  UNIQUE INDEX `catalog_name_UNIQUE` (`catalog_name` ASC) VISIBLE
);