/*JOIN con mas de dos tablas*/

SELECT
	YEAR(r.rental_date) AS anio,
	MONTH(r.rental_date) AS mes,
	SUM(f.rental_rate)
FROM rental AS r
JOIN inventory AS i
	ON i.inventory_id = r.inventory_id
JOIN film AS f
	ON f.film_id = i.film_id
GROUP BY 1,2
ORDER BY 1,2
;