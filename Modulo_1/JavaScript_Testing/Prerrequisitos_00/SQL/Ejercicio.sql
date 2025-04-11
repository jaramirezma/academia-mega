/*Ejercicio*/

/*Pregunta 1:
haz una consulta retornando los campos de la tabla cliente, 
en orden ascendente por el campo nombre.  
¿Cuál cliente_id es el primero en tus resultados?*/
SELECT *
FROM customer
ORDER BY first_name ASC
;

/*Pregunta 2:
haz una consulta retornando los campos de la tabla cliente, 
en orden descendente por el campo nombre.  
¿Cuál cliente_id es el primero en tus resultados?*/

SELECT * 
FROM customer
ORDER BY first_name DESC
;