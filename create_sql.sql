CREATE DATABASE siscdad
DEFAULT COLLATE utf8_general_ci
DEFAULT CHARSET utf8;

use siscdad;

CREATE TABLE `disciplina` (
  `cod` varchar(10) NOT NULL,
  `disciplina` varchar(50) NOT NULL,
  `carg_hora` int(11) NOT NULL,
  PRIMARY KEY (`cod`)
) default charset = utf8;

CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `disciplina` varchar(50) DEFAULT NULL,
  `dia` int(11) DEFAULT NULL,
  `hora1` int(11) DEFAULT NULL,
  `hora2` int(11) DEFAULT NULL,
  `hora3` int(11) DEFAULT NULL,
  `hora4` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
)default charset = utf8;

CREATE TABLE `turma` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dia` int(11) DEFAULT NULL,
  `horario` int(11) DEFAULT NULL,
  `nome` varchar(50) NOT NULL,
  `fkprofessor` int(11) DEFAULT NULL,
  `fkdisciplina` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkdisciplina` (`fkdisciplina`),
  KEY `fkprofessor` (`fkprofessor`),
  CONSTRAINT `turma_ibfk_1` FOREIGN KEY (`fkdisciplina`) REFERENCES `disciplina` (`cod`),
  CONSTRAINT `turma_ibfk_2` FOREIGN KEY (`fkprofessor`) REFERENCES `professor` (`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE `disciplina_professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dia` int(11) DEFAULT NULL,
  `horario` int(11) DEFAULT NULL,
  `fkprofessor` int(11) DEFAULT NULL,
  `fkdisciplina` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkdisciplina` (`fkdisciplina`),
  KEY `fkprofessor` (`fkprofessor`),
  CONSTRAINT `disciplina_professor_ibfk_1` FOREIGN KEY (`fkdisciplina`) REFERENCES `disciplina` (`cod`),
  CONSTRAINT `disciplina_professor_ibfk_2` FOREIGN KEY (`fkprofessor`) REFERENCES `professor` (`id`)
) DEFAULT CHARSET=utf8;