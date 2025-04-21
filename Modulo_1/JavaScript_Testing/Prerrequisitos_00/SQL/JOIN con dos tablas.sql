/*JOIN con dos tablas*/

SELECT *
FROM rental
LIMIT 100
;

SELECT customer_id, COUNT(*)
FROM rental
GROUP BY 1
;

SELECT *
FROM rental
JOIN customer
	ON rental.customer_id = customer.customer_id
;

SELECT customer.customer_id, 
	customer.first_name, 
    customer.last_name,
    rental.rental_id
FROM rental
JOIN customer
	ON rental.customer_id = customer.customer_id
;

SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    r.rental_id
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
;


SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    COUNT(r.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
GROUP BY 1,2,3
;

SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    COUNT(r.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
GROUP BY 1,2,3
ORDER BY 4 DESC
;


SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    COUNT(r.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
GROUP BY 1,2,3
ORDER BY 4 DESC
LIMIT 5
;

/*Ejercicios*/
SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    COUNT(r.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
WHERE c.first_name = 'Marion'
	AND c.last_name = 'Snyder'
GROUP BY 1,2,3
LIMIT 5
;

SELECT c.customer_id, 
	c.first_name, 
    c.last_name,
    COUNT(r.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
WHERE 4 >= 1
GROUP BY 1,2,3
;


SELECT 
    SUM(i.rental_id)
FROM rental AS r
JOIN customer AS c
	ON r.customer_id = c.customer_id
JOIN inventory AS i
	ON c.inventory_id = i.inventory_id
WHERE 4 >= 1
GROUP BY 1,2,3
;