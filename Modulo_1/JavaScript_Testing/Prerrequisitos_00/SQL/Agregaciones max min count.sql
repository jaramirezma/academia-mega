/*Agregaciones MAX, MIN, COUNT*/

SELECT MIN(rental_rate), MAX(rental_rate),
	COUNT(original_language_id),
	COUNT(film_id),
    COUNT(*)
FROM film
;

SELECT DISTINCT rental_rate
FROM film
;

SELECT COUNT(DISTINCT rental_rate)
FROM film
;