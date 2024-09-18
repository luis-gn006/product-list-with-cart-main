# Product List with Cart Main

## Project Description

This project is a shopping cart application that allows users to add, remove, and modify the quantity of products in their cart. It features a simple interface to interact with various desserts and offers functionalities such as automatic total calculation and order confirmation.

## Preview

![alt text](./images/preview.jpg)

### Main Features

#### Add Products to Cart

By clicking the "Add to Cart" button of a product, the quantity of that product in the cart increases, and the total count is updated. A visual card for the added product is generated using the AddYourCart class. Users can modify the product quantities.

Each product in the cart has buttons to increase or decrease its quantity. The increment function increases the quantity and total price of the product, while the decrement function does the opposite; if the product count is less than one, the visual card is removed.

Clicking the delete button removes the product from the cart, updating both the product count and total price.

#### Cart Total Calculation

The totalCart function iterates through all the products in the cart, calculating the total price and displaying the result in the interface.

#### Order Confirmation

When clicking "Confirm Order," a popup opens, showing a summary of the products in the cart, using the AddConfirmCart class to generate confirmation cards.

#### Start New Order

A button to start a new order resets the cart state, removing all products and resetting the counters.

## GitHub Pages Link to View My Page: [https://luis-gn006.github.io/product-list-with-cart-main/index.html](https://luis-gn006.github.io/product-list-with-cart-main/index.html)
