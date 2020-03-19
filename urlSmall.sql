-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `url`;
CREATE TABLE `url` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(200) NOT NULL,
  `unique` varchar(200) DEFAULT NULL,
  `redirectUrl` text NOT NULL,
  `createAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique` (`unique`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- 2020-03-19 11:25:25
