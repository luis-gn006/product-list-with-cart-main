const waffle = document.querySelector(".product-waffle");
const waffleButton = waffle.querySelector(".add-to-cart");
const waffleDecrement = waffle.querySelector(".add-to-cart__decrement");
const waffleCounter = waffle.querySelector(".add-to-cart__quantity");
const waffleIncrement = waffle.querySelector(".add-to-cart__increment");

const creme = document.querySelector(".product-creme");
const cremeButton = creme.querySelector(".add-to-cart");
const cremeDecrement = creme.querySelector(".add-to-cart__decrement");
const cremeCounter = creme.querySelector(".add-to-cart__quantity");
const cremeIncrement = creme.querySelector(".add-to-cart__increment");

const macaron = document.querySelector(".product-macaron");
const macaronButton = macaron.querySelector(".add-to-cart");
const macaronDecrement = macaron.querySelector(".add-to-cart__decrement");
const macaronCounter = macaron.querySelector(".add-to-cart__quantity");
const macaronIncrement = macaron.querySelector(".add-to-cart__increment");

const tiramisu = document.querySelector(".product-tiramisu");
const tiramisuButton = tiramisu.querySelector(".add-to-cart");
const tiramisuDecrement = tiramisu.querySelector(".add-to-cart__decrement");
const tiramisuCounter = tiramisu.querySelector(".add-to-cart__quantity");
const tiramisuIncrement = tiramisu.querySelector(".add-to-cart__increment");

const baklava = document.querySelector(".product-baklava");
const baklavaButton = baklava.querySelector(".add-to-cart");
const baklavaDecrement = baklava.querySelector(".add-to-cart__decrement");
const baklavaCounter = baklava.querySelector(".add-to-cart__quantity");
const baklavaIncrement = baklava.querySelector(".add-to-cart__increment");

const meringue = document.querySelector(".product-meringue");
const meringueButton = meringue.querySelector(".add-to-cart");
const meringueDecrement = meringue.querySelector(".add-to-cart__decrement");
const meringueCounter = meringue.querySelector(".add-to-cart__quantity");
const meringueIncrement = meringue.querySelector(".add-to-cart__increment");

const cake = document.querySelector(".product-cake");
const cakeButton = cake.querySelector(".add-to-cart");
const cakeDecrement = cake.querySelector(".add-to-cart__decrement");
const cakeCounter = cake.querySelector(".add-to-cart__quantity");
const cakeIncrement = cake.querySelector(".add-to-cart__increment");

const brownie = document.querySelector(".product-brownie");
const brownieButton = brownie.querySelector(".add-to-cart");
const brownieDecrement = brownie.querySelector(".add-to-cart__decrement");
const brownieCounter = brownie.querySelector(".add-to-cart__quantity");
const brownieIncrement = brownie.querySelector(".add-to-cart__increment");

const panna = document.querySelector(".product-panna");
const pannaButton = panna.querySelector(".add-to-cart");
const pannaDecrement = panna.querySelector(".add-to-cart__decrement");
const pannaCounter = panna.querySelector(".add-to-cart__quantity");
const pannaIncrement = panna.querySelector(".add-to-cart__increment");

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
  waffle,
  waffleButton,
  waffleDecrement,
  waffleCounter,
  waffleIncrement,
  creme,
  cremeButton,
  cremeDecrement,
  cremeCounter,
  cremeIncrement,
  macaron,
  macaronButton,
  macaronDecrement,
  macaronCounter,
  macaronIncrement,
  tiramisu,
  tiramisuButton,
  tiramisuDecrement,
  tiramisuCounter,
  tiramisuIncrement,
  baklava,
  baklavaButton,
  baklavaDecrement,
  baklavaCounter,
  baklavaIncrement,
  meringue,
  meringueButton,
  meringueDecrement,
  meringueCounter,
  meringueIncrement,
  cake,
  cakeButton,
  cakeDecrement,
  cakeCounter,
  cakeIncrement,
  brownie,
  brownieButton,
  brownieDecrement,
  brownieCounter,
  brownieIncrement,
  panna,
  pannaButton,
  pannaDecrement,
  pannaCounter,
  pannaIncrement,
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
