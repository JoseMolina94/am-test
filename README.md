# am-test
Este proyecto es una prueba técnica que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/), utilizando como base el repositorio [amTesting](https://github.com/heatxel/amTesting).

- **Next.js** (última versión)
- **TypeScript**
- **Zustand**: para el manejo global del estado (selección de personaje)
- **JSON Server**: para gestionar el sistema de personajes favoritos
- **CSS Modules**: para el sistema de estilos

## Instrucciones para correr el proyecto:

Usa la siguiente secuencia de comandos:

Para efectuar la instalación del proyecto y dependencias.
### `npm install`

Json Server correra en el puerto 3001.
### `npm run server`

El proyecto correra en el puerto 3000.
### `npm run dev`

## ¿Qué me gustó del proyecto?:
Me gustó especialmente la temática visual de Rick and Morty. Fue refrescante trabajar en una prueba más enfocada en la interfaz y experiencia del usuario, en lugar de una típica aplicación de oficina. A nivel de diseño, representó un reto interesante y entretenido.

## Que hubiera mejorado si hubiera tenido mas tiempo?:
Un factor que hubiera mejorado en el proyecto seria ajustar mejor el responsive del proyecto, hubiera hecho que el personaje seleccionado en la version mobile cambiara usando las flechas a los lados de la imagen y el scroll se reposicionara segun la seleccion

Hubiera agregado tambien paginacion a la lista de personajes, y las pruebas tecnicas que planeaba realizarlas con la libreria de "Jest" pero tuve problemas en la instalación y ya no me alcanzaba el tiempo.

## Algun Bug que haya solucionado en el proceso?
Tuve un problema al intentar eliminar personajes favoritos. Aunque usaba el mismo ID que el personaje, JSON Server almacenaba los IDs como string, mientras que la API los entregaba como número. Esto causaba que la eliminación no funcionara correctamente.

La solución fue convertir el ID a string al momento de guardar un personaje como favorito, y luego convertir los IDs recibidos de la API también a string al compararlos. De esta forma, la eliminación y verificación de favoritos funciona correctamente.

# Notas importantes
Al momento de este desarrollo, use el Figma proporcionado para la prueba, pero no tuve el acceso a los recursos visuales (por ello no son iguales), y los estilos de los componentes tambien me costo mucho lograrlas de manera precisa.

## Jose Molina
### Muchas Gracias por leer.