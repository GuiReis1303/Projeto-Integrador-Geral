CREATE DATABASE  IF NOT EXISTS `stationclass` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `stationclass`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: stationclass
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aula`
--

DROP TABLE IF EXISTS `aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aula` (
  `idaula` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `urlvideo` varchar(60) NOT NULL,
  PRIMARY KEY (`idaula`),
  UNIQUE KEY `idaula_UNIQUE` (`idaula`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aula`
--

LOCK TABLES `aula` WRITE;
/*!40000 ALTER TABLE `aula` DISABLE KEYS */;
INSERT INTO `aula` VALUES (1,'Criando a Estrutura HTML','https://www.youtube.com/embed/D-MZagJWgbI'),(2,'Como Começar a Investir','https://www.youtube.com/embed/D-MZagJWgbI'),(3,'Aprendendo Photoshop','https://www.youtube.com/embed/D-MZagJWgbI');
/*!40000 ALTER TABLE `aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunidade`
--

DROP TABLE IF EXISTS `comunidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comunidade` (
  `idcomunidade` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) NOT NULL,
  `comentario` mediumtext NOT NULL,
  `iduser` int(11) NOT NULL,
  `descricao` tinytext NOT NULL,
  `criacao` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomunidade`),
  UNIQUE KEY `idcomunidade_UNIQUE` (`idcomunidade`),
  KEY `iduser_idx` (`iduser`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunidade`
--

LOCK TABLES `comunidade` WRITE;
/*!40000 ALTER TABLE `comunidade` DISABLE KEYS */;
INSERT INTO `comunidade` VALUES (41,'Aula Finanças','Acho que esse curso de investimentos vai me ajudar muito já que tenho um dinheiro sobrando e investir ele pode dar bom',4,'Bora ganhar dinheiro','2022-07-05 10:35:47'),(40,'Aula HTML','Acho que a aula de HTML foi muito bem explicada e o instrutor é muito habilidoso para explicar e também programar em HTML',1,'Minha opnião sobre a aula','2022-07-05 10:34:34'),(42,'Aula Photoshop','Adorei a aula de photoshop e o professor sabe muito do aplicativo, mas também sabe como deixar tudo bonito, ele é muito top',3,'Bora deixar tudo bonito','2022-07-05 10:37:05');
/*!40000 ALTER TABLE `comunidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curtida_aula`
--

DROP TABLE IF EXISTS `curtida_aula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curtida_aula` (
  `idcurtida_aula` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `idaula` int(11) NOT NULL,
  PRIMARY KEY (`idcurtida_aula`),
  UNIQUE KEY `idcurtida_aula_UNIQUE` (`idcurtida_aula`),
  KEY `iduser_idx` (`iduser`),
  KEY `idaula_idx` (`idaula`),
  CONSTRAINT `idaula` FOREIGN KEY (`idaula`) REFERENCES `aula` (`idaula`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `usuario` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curtida_aula`
--

LOCK TABLES `curtida_aula` WRITE;
/*!40000 ALTER TABLE `curtida_aula` DISABLE KEYS */;
INSERT INTO `curtida_aula` VALUES (20,1,2),(21,1,3),(22,2,1),(23,2,2),(24,2,3),(25,3,1),(26,3,2),(27,3,3),(28,4,1),(29,4,2),(30,4,3),(31,5,1),(32,5,2),(33,5,3),(34,6,1),(35,6,2),(36,6,3),(39,10,1);
/*!40000 ALTER TABLE `curtida_aula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL,
  `senha` varchar(30) NOT NULL,
  `tipo_conta` varchar(1) DEFAULT '0',
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `iduser_UNIQUE` (`iduser`),
  UNIQUE KEY `nick_UNIQUE` (`nick`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Gui','gui@gmail.com','12345','1'),(2,'teste0','teste0@gmail.com','12345','1'),(3,'Paulo','paulo@gmail.com','12345','1'),(4,'Marcos','marcos@gmail.com','12345','1'),(5,'Aralto','aralto@gmail.com','12345','1'),(6,'gui1','gui','12345','0'),(10,'123','gui12','13245','0'),(11,'teste1','teste1@','12345','0'),(12,'Guilherme13','slaslalda@gmail.com','12345','0');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06  9:12:34
