CREATE DATABASE movies;

USE movies;

CREATE TABLE movieList (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO movieList (name) VALUES ('Training Day');
INSERT INTO movieList (name) VALUES ('The Hangover');
INSERT INTO movieList (name) VALUES ('007');
INSERT INTO movieList (name) VALUES ('The Green Mile');
INSERT INTO movieList (name) VALUES ('Terminator');