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
INSERT INTO `aula` VALUES (1,'Criando a Estrutura HTML','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8'),(2,'Como Começar a Investir','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8'),(3,'Aprendendo Photoshop','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8');
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
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunidade`
--

LOCK TABLES `comunidade` WRITE;
/*!40000 ALTER TABLE `comunidade` DISABLE KEYS */;
INSERT INTO `comunidade` VALUES (1,'Aula HTML','gostei bastante da aula',1,'Sobre a aula HTML','2022-06-30 16:33:05'),(2,'Aula Photoshop','gostei muito dessa aula, mt bem explicada',2,'Sobre a aula Photoshop','2022-06-30 16:33:05'),(3,'Aula Finanças','Agora vou conseguir dinheiro de vdd',5,'Bora lucrar','2022-06-30 16:33:05');
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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curtida_aula`
--

LOCK TABLES `curtida_aula` WRITE;
/*!40000 ALTER TABLE `curtida_aula` DISABLE KEYS */;
INSERT INTO `curtida_aula` VALUES (19,1,1),(20,1,2),(21,1,3),(22,2,1),(23,2,2),(24,2,3),(25,3,1),(26,3,2),(27,3,3),(28,4,1),(29,4,2),(30,4,3),(31,5,1),(32,5,2),(33,5,3),(34,6,1),(35,6,2),(36,6,3),(37,1,1),(38,1,1);
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
  `tipo_conta` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `iduser_UNIQUE` (`iduser`),
  UNIQUE KEY `nick_UNIQUE` (`nick`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'gui','gui@gmail.com','12345','1'),(2,'Conrado','conrado@gmail.com','12345',NULL),(3,'Paulo','paulo@gmail.com','12345',NULL),(4,'Marcos','marcos@gmail.com','12345',NULL),(5,'Aralto','aralto@gmail.com','12345',NULL),(6,'gui1','gui','12345',NULL),(7,'','','',NULL),(10,'123','gui12','13245',NULL),(11,'sla13','sla@gmail.com','12345',NULL),(13,'teste','teste','teste',NULL),(14,'teste1','teste1','teste1',NULL),(15,'teste2','teste2','teste2',NULL),(16,'teste3','teste3','teste3',NULL),(17,'teste4','teste4','teste4',NULL),(18,'testes2','testes1','testes2',NULL),(22,'134012g','gui13@gmail.com','12345',NULL),(23,'Gui14','gui14@gmail.com','12345',NULL),(24,'isa ','isabelaap@gmail.com','1234',NULL),(25,'reis13','reis@gmail.com','12345',NULL),(27,'reis14','reis14@gmail.com','12345',NULL),(28,'reis15','reis15@gmail.com','12345',NULL),(29,'sirley13','sirley@gmail.com','12345',NULL),(30,'bia13','bia@gmail.com','12345',NULL),(31,'sally13','sally@gmail.com','12345',NULL),(32,'sally14','sally14@gmail.com','12345',NULL),(33,'marcos13','marcos13@gmail.com','12345',NULL),(34,'sasasass','guireis1303@gmail.comsss','sssssssssssss',NULL),(35,'felipe13','felipe@gmail.com','12345',NULL);
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

-- Dump completed on 2022-06-30 16:44:58
