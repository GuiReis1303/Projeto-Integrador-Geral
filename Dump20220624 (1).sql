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
  `idavaliacao` int(11) DEFAULT NULL,
  PRIMARY KEY (`idaula`),
  UNIQUE KEY `idaula_UNIQUE` (`idaula`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aula`
--

LOCK TABLES `aula` WRITE;
/*!40000 ALTER TABLE `aula` DISABLE KEYS */;
INSERT INTO `aula` VALUES (1,'Criando a Estrutura HTML','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8',NULL),(2,'Como Começar a Investir','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8',NULL),(3,'Aprendendo Photoshop','https://www.youtube-nocookie.com/embed/uCyVx1vYDz8',NULL);
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
  `comentario` mediumtext NOT NULL,
  `avaliacaoPositiva` int(11) NOT NULL,
  `avaliacaoNegativa` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  PRIMARY KEY (`idcomunidade`),
  UNIQUE KEY `idcomunidade_UNIQUE` (`idcomunidade`),
  KEY `iduser_idx` (`iduser`),
  CONSTRAINT `iduser_comunidade` FOREIGN KEY (`iduser`) REFERENCES `usuario` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunidade`
--

LOCK TABLES `comunidade` WRITE;
/*!40000 ALTER TABLE `comunidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `comunidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `idcurso` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) CHARACTER SET latin1 NOT NULL,
  `idavaliacao` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcurso`),
  UNIQUE KEY `idcurso_UNIQUE` (`idcurso`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
INSERT INTO `curso` VALUES (1,'HTML Completo',NULL);
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
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
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `iduser_UNIQUE` (`iduser`),
  UNIQUE KEY `nick_UNIQUE` (`nick`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'gui','gui@gmail.com','12345'),(2,'Conrado','conrado@gmail.com','12345'),(3,'Paulo','paulo@gmail.com','12345'),(4,'Marcos','marcos@gmail.com','12345'),(5,'Aralto','aralto@gmail.com','12345'),(6,'gui1','gui','12345'),(7,'','',''),(10,'123','gui12','13245'),(11,'sla13','sla@gmail.com','12345'),(13,'teste','teste','teste'),(14,'teste1','teste1','teste1'),(15,'teste2','teste2','teste2'),(16,'teste3','teste3','teste3'),(17,'teste4','teste4','teste4'),(18,'testes2','testes1','testes2'),(22,'134012g','gui13@gmail.com','12345'),(23,'Gui14','gui14@gmail.com','12345'),(24,'isa ','isabelaap@gmail.com','1234'),(25,'reis13','reis@gmail.com','12345'),(27,'reis14','reis14@gmail.com','12345'),(28,'reis15','reis15@gmail.com','12345'),(29,'sirley13','sirley@gmail.com','12345'),(30,'bia13','bia@gmail.com','12345'),(31,'sally13','sally@gmail.com','12345'),(32,'sally14','sally14@gmail.com','12345'),(33,'marcos13','marcos13@gmail.com','12345');
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

-- Dump completed on 2022-06-24 13:57:33
