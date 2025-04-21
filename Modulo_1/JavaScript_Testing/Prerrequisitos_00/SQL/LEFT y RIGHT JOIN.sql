/*LEFT y RIGHT JOIN*/

SELECT COUNT(*)
FROM film
;

SELECT f.film_id,
	f.title,
    COUNT(i.inventory_id) AS copias
FROM film AS f
JOIN inventory AS i
	ON f.film_id = i.film_id
GROUP BY 1,2
;

SELECT f.film_id,
	f.title,
    COUNT(i.inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON f.film_id = i.film_id
GROUP BY 1,2
;




SELECT f.film_id,
	f.title,
    COUNT(DISTINCT i.inventory_id) AS copias,
    COUNT(r.rental_id) AS rentas
FROM film AS f
LEFT JOIN inventory AS i
	ON f.film_id = i.film_id
LEFT JOIN rental AS r
	ON r.inventory_id = i.inventory_id
GROUP BY 1,2
;




SELECT store_id,
COUNT(DISTINCT film_id) AS peliculas,
COUNT(inventory_id) AS copias
FROM inventory
GROUP BY 1
;

SELECT f.film_id,
	f.title,
    COUNT(i.inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON f.film_id = i.film_id
GROUP BY 1,2
;


SELECT f.film_id,
	f.title,
	COUNT(inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
		AND i.store_id = 1
GROUP BY 1,2
;

/*EJERCICIOS*/
SELECT f.film_id,
	f.title,
	COUNT(inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
WHERE f.film_id = 400
GROUP BY 1,2
;

SELECT f.film_id,
	f.title,
	COUNT(inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
WHERE f.film_id = 400
	AND i.store_id = 2
GROUP BY 1,2
;


SELECT f.film_id,
	f.title,
    COUNT(DISTINCT i.inventory_id) AS copias,
    COUNT(r.rental_id) AS rentas
FROM film AS f
LEFT JOIN inventory AS i
	ON f.film_id = i.film_id
LEFT JOIN rental AS r
	ON r.inventory_id = i.inventory_id
WHERE f.film_id = 400
GROUP BY 1,2
;