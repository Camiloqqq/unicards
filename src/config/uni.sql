CREATE DATABASE unicards_db;

USE unicards_db;

-- usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_usuario VARCHAR(50),
  correo VARCHAR(100) UNIQUE,
  contrasena VARCHAR(255)
);

-- cartas
CREATE TABLE cartas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  url_imagen TEXT
);

-- cartas que posee un usuario
CREATE TABLE usuario_cartas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  carta_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (carta_id) REFERENCES cartas(id)
);
