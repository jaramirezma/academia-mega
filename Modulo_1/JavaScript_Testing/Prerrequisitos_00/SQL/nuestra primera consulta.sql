USE sakila;

/*
RECUPERA 
DE
DONDE
	||
SELECT
FROM
WHERE
*/

/*EJEMPLO #1:
	RECUPERA el número de identificación del cliente, su nombre, y su apellido
	DE la tabla cliente
*/
SELECT customer_id, first_name, last_name
FROM customer
;

/*EJEMPLO #2:
	RECUPERA el titulo y año de estreno de cada pelicula
	DE la tabla pelicula
*/
SELECT title, release_year
FROM film
;

/*EJEMPLO #3:
	De la tabla pelicula
    quiero ver todos los campos de cada pelicula
*/
SELECT *
FROM film
;


/*EJEMPLO #4:
	De la tabla pelicula
    quiero ver todos los campos de cada pelicula
    ordenados por el costo de renta, ascendiendo en valor
*/
SELECT *
FROM film
ORDER BY rental_rate ASC
;

/*EJEMPLO #5:
	De la tabla pelicula
    quiero ver el titulo y costo
    de todas las peliculas que cuesten .99 para rentar
*/
SELECT title, rental_rate
FROM film
WHERE rental_rate = .99
;