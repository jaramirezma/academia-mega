/*CONDICIONALES*/


SELECT f.title, 
	f.rental_rate,
	CASE WHEN rental_rate > 3
			THEN 'Cara'
			ELSE 'Barata'
	END AS costo_tipo
FROM film AS f
LIMIT 10
;


SELECT f.title, 
	f.rental_rate,
	CASE 
		WHEN rental_rate < 1
			THEN 'Menos de 1'
		WHEN rental_rate >= 1 AND rental_rate < 3
			THEN 'Entre 1 y 3'
		WHEN rental_rate >= 3 AND rental_rate < 4
			THEN 'Entre 3 y 4'
		ELSE 'Mas de 4'
	END AS costo_rango
FROM film AS f
LIMIT 1000
;

SELECT f.title, 
	f.rental_rate,
	CASE 
		WHEN rental_rate < 1
			THEN 'Menos de 1'
		WHEN rental_rate < 3
			THEN 'Entre 1 y 3'
		WHEN rental_rate < 4
			THEN 'Entre 3 y 4'
		ELSE 'Mas de 4'
	END AS costo_rango
FROM film AS f
LIMIT 1000
;


SELECT f.title,
	COUNT(i.inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
		AND i.store_id = 1
GROUP BY 1
ORDER BY 1
;


SELECT f.title,
	COUNT(i.inventory_id) AS copias
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
		AND i.store_id = 2
GROUP BY 1
ORDER BY 1
;


SELECT f.title,
	COUNT(
			CASE 
				WHEN i.store_id =1 
					THEN i.inventory_id
			END
		) AS copias_tienda_1,
	COUNT(
		CASE 
			WHEN i.store_id =2 
				THEN i.inventory_id
		END
	) AS copias_tienda_2
FROM film AS f
LEFT JOIN inventory AS i
	ON i.film_id = f.film_id
GROUP BY 1
ORDER BY 1
;


/*EJERCICIOS*/
SELECT 
    CASE 
        WHEN rental_rate < 1 THEN 'Menos de 1'
        WHEN rental_rate < 3 THEN 'Entre 1 y 3'
        WHEN rental_rate < 4 THEN 'Entre 3 y 4'
        ELSE 'Más de 4'
    END AS rango_tarifa,
    COUNT(*) AS total
FROM film
GROUP BY 
    CASE 
        WHEN rental_rate < 1 THEN 'Menos de 1'
        WHEN rental_rate < 3 THEN 'Entre 1 y 3'
        WHEN rental_rate < 4 THEN 'Entre 3 y 4'
        ELSE 'Más de 4'
    END
ORDER BY total DESC;
