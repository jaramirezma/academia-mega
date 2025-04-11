/*Operadores lógicos*/
SELECT title, rental_rate, replacement_cost
FROM film
WHERE rental_rate > 2
;

SELECT title, rental_rate, replacement_cost
FROM film
WHERE rental_rate > 2
	AND rental_rate < 4
;

SELECT title, rental_rate, replacement_cost
FROM film
WHERE rental_rate BETWEEN 2 AND  4
;

SELECT title, rental_rate, replacement_cost, 
	(rental_rate *5) AS new_replacement_cost
FROM film
;

SELECT title
FROM film
WHERE title LIKE '%human%'
;


SELECT first_name, last_name,
CONCAT(first_name, ' ',last_name) AS full_name
FROM customer;

SELECT first_name, last_name,
CONCAT(first_name, ' ',last_name) AS full_name
FROM customer
WHERE first_name LIKE 'M%';


SELECT title, release_year, YEAR(NOW()) - release_year AS old_years
FROM film;

/*Ejercicios*/
SELECT *
FROM film
WHERE special_features = 'Trailers'
;

SELECT *
FROM film
WHERE special_features LIKE '%Trailers%'
;

SELECT *
FROM film
WHERE special_features = '%Trailers%'
	AND rental_rate = 2.99
;

SELECT *
FROM film
WHERE rental_rate = 2.99
ORDER BY title ASC
;