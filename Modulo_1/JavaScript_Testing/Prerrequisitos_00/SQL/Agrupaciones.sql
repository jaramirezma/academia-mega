/*Agrupaciones GROUP BY*/

SELECT rental_rate, COUNT(*)
FROM film
GROUP BY  rental_rate
;

SELECt *
FROM film
;


SELECT rating, AVG(length)
FROM film
GROUP BY rating
ORDER BY AVG(length) ASC
;

SELECT rating, AVG(length), AVG(rental_rate)
FROM film
GROUP BY 1
ORDER BY 2 DESC
;

SELECT rating, rental_rate, AVG(length)
FROM film
GROUP BY 1,2
ORDER BY 1,2
;

/*Ejercicios*/
SELECT MIN(length), MAX(length)
FROM film
;

SELECT COUNT(*)
FROM film
WHERE length = 48
;

SELECT store_id, COUNT(*)
FROM customer
GROUP BY store_id
;