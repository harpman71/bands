-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 18-02-2021 a las 17:49:36
-- Versión del servidor: 5.7.33-0ubuntu0.16.04.1
-- Versión de PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `music`
--
CREATE DATABASE IF NOT EXISTS `music` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `music`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `artists`
--

INSERT INTO `artists` (`id`, `name`, `country`, `image`) VALUES
(1, 'The Jesus and Mary Chain', 'Scotland', 'https://collectionimages.npg.org.uk/std/mw11944/The-Jesus-and-Mary-Chain.jpg'),
(2, 'Depeche Mode', 'England', 'https://portalternativo.com/wp-content/themes/sweet16/img/bandas/Depeche+Mode.jpg'),
(3, 'Sonic Youth', 'USA', 'https://4.bp.blogspot.com/-GAn9K-N33qw/Ub8ZbnxBBII/AAAAAAAABoU/5xZI-fT5ZPQ/s1600/SONIC+Y.jpg'),
(4, 'Black Rebel Motorcycle Club', 'USA', 'http://e-cdn-images.deezer.com/images/artist/f16d1b3b25483986d83cc076f58e0c12/500x500.jpg'),
(5, 'The Cure', 'England', 'http://cps-static.rovicorp.com/3/JPG_250/MI0001/369/MI0001369795.jpg'),
(6, 'Alice in Chains', 'USA', 'http://spillmagazine.com/wp-content/uploads/2018/05/Alice-In-Chains.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
