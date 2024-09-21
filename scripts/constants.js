const products = [
  "waffle",
  "creme",
  "macaron",
  "tiramisu",
  "baklava",
  "meringue",
  "cake",
  "brownie",
  "panna",
];

const productElements = products.map((product) => {
  const element = document.querySelector(`.product-${product}`);
  return {
    button: element.querySelector(".add-to-cart"),
    decrement: element.querySelector(".add-to-cart__decrement"),
    counter: element.querySelector(".add-to-cart__quantity"),
    increment: element.querySelector(".add-to-cart__increment"),
  };
});

const productIds = [
  "#Waffle",
  "#Creme",
  "#Macaron",
  "#Tiramisu",
  "#Baklava",
  "#Pie",
  "#Cake",
  "#Brownie",
  "#Panna",
];

const yourCartProducts = document.querySelector(".your-cart__products");
const yourCartCounter = document.querySelector(".your-cart__heading");

const emptyCart = document.querySelector(".your-cart__empty");
const selectedCart = document.querySelector(".your-cart__selected");
const yourCartTotalPrice = document.querySelector(".your-cart__total-price");

const confirmOrderButton = document.querySelector(".your-cart__button-confirm");
const startNewOrderButton = document.querySelector(".popup__form-button");
const popupOrderTotal = document.querySelector(".popup__order-total-price");
const popupConfirmedProducts = document.querySelector(".popup__order-products");

export {
  productElements,
  productIds,
  yourCartProducts,
  yourCartCounter,
  emptyCart,
  selectedCart,
  yourCartTotalPrice,
  confirmOrderButton,
  startNewOrderButton,
  popupOrderTotal,
  popupConfirmedProducts,
};
