# product-list-with-cart-main

## Descripción del Proyecto

Este proyecto es una aplicación de carrito de compras que permite a los usuarios añadir, eliminar y modificar la cantidad de productos en su carrito. Incluye una interfaz sencilla para interactuar con diversos postres, y ofrece funcionalidades como cálculo automático del total del carrito y confirmación de pedidos.

## Preview

![alt text](./images/preview.jpg)

### Funcionalidades Principales

Añadir Productos al Carrito

Al hacer clic en el botón de "añadir al carrito" de un producto, se incrementa la cantidad de ese producto en el carrito y se actualiza el contador total.
Se genera una tarjeta visual del producto añadido usando la clase AddYourCart.
Modificar Cantidad de Productos

Cada producto en el carrito tiene botones para incrementar o disminuir su cantidad.
La función increment actualiza la cantidad y el precio total del producto, mientras que decrement lo hace a la inversa.
Eliminar Productos del Carrito

Al hacer clic en el botón de eliminar, se elimina el producto del carrito, y se actualizan tanto el contador de productos como el total de precios.
Cálculo del Total del Carrito

La función totalCart recorre todos los productos en el carrito y calcula el precio total, mostrando el resultado en la interfaz.
Confirmación de Pedido

Al hacer clic en "Confirmar pedido", se abre un popup que muestra un resumen de los productos en el carrito, utilizando la clase AddConfirmCart para generar las tarjetas de confirmación.
Manejo de Eventos

Se gestionan eventos de clic para los botones de añadir, eliminar, y confirmar, así como eventos de teclado para cerrar el popup con la tecla "Escape".
Inicio de Nueva Orden

Un botón para comenzar una nueva orden reinicia el estado del carrito, eliminando todos los productos y reseteando los contadores.
Inicialización de Contadores
Los contadores para cada tipo de postre se inicializan mediante la función setupCounter, que asigna los eventos correspondientes a los botones de incremento y decremento.

Popup para Confirmar Pedido
El popup que aparece al confirmar el pedido muestra un resumen de los productos seleccionados y permite cerrar el popup al hacer clic fuera de él o presionando "Escape".
