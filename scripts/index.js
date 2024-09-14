import { AddYourCart } from "./AddYourCart.js";
let counter = 0;

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

function totalCart() {
  let totalPrice = [];
  const allAddedCart = document.querySelectorAll(".addedCart__total-price");
  allAddedCart.forEach((product) => {
    let priceWitout$ = product.textContent.replace("$", "");
    let priceNumber = Number(priceWitout$);
    totalPrice.push(priceNumber);
    let totalPriceSum = totalPrice.reduce((a, b) => a + b, 0);
    yourCartTotalPrice.textContent = `$${totalPriceSum}`;
  });
}

function setItemRemoveButton() {
  const removeButtons = document.querySelectorAll(".addedCart__remove");
  removeButtons.forEach((btn) =>
    btn.addEventListener("click", (evt) => {
      let id = evt.currentTarget.parentNode.parentNode.getAttribute("id");
      let container = document.getElementById(id);
      let card = document.querySelector(`#product${id}`);
      let cardButton = card.querySelector(".add-to-cart");
      let cardCounter = card.querySelector(".add-to-cart__quantity");
      counter = counter - parseInt(cardCounter.textContent);
      cardCounter.textContent = 0;
      removeCart(cardButton);
      container.remove();
      getEmptyCart();
      totalCart();
    })
  );
}

function setItemAddCartButton() {
  const addCartButtons = document.querySelectorAll(".add-to-cart");
  addCartButtons.forEach((btn) =>
    btn.addEventListener("click", (evt) => {
      emptyCart.classList.add("your-cart__empty-inactive");
      selectedCart.classList.remove("your-cart__selected-inactive");
      let button = evt.currentTarget;
      let product = button.parentNode;
      let productCounter = product.querySelector(".add-to-cart__quantity");
      button.classList.add("add-to-cart__inactive");
      button.nextElementSibling.classList.remove(
        "add-to-cart__counter-inactive"
      );
      let image = button.previousElementSibling;
      button.previousElementSibling.classList.add("product__image-addedToCart");
      counter = counter + 1;
      productCounter.textContent = parseInt(productCounter.textContent) + 1;
      yourCartCounter.textContent = `Your Cart (${counter})`;
      const ProductToCart = new AddYourCart(
        product.querySelector(".product__title").textContent,
        product.querySelector(".product__price").textContent,
        image.src,
        ".addedCart__template"
      );
      const productItem = ProductToCart.generateCard();
      yourCartProducts.append(productItem);
      setItemRemoveButton();
      totalCart();
    })
  );
}
setItemAddCartButton();

function removeCart(button) {
  button.classList.remove("add-to-cart__inactive");
  button.nextElementSibling.classList.add("add-to-cart__counter-inactive");
  button.previousElementSibling.classList.remove("product__image-addedToCart");
  yourCartCounter.textContent = `Your Cart (${counter})`;
}
function decrement(counterProduct, card) {
  counter = counter - 1;
  let decreseCounterProduct = counterProduct.textContent - 1;
  yourCartCounter.textContent = `Your Cart (${counter})`;
  counterProduct.textContent = decreseCounterProduct;
  const cardSelector = card;
  const cardQuantity = cardSelector.querySelector(".addedCart__quantity");
  const cardPrice = cardSelector.querySelector(".addedCart__price").textContent;
  const newCardPrice = cardPrice.replace("$", "");
  const cardTotal = cardSelector.querySelector(".addedCart__total-price");
  cardQuantity.textContent = `${decreseCounterProduct}x`;
  const decrementTotalPrice = decreseCounterProduct * parseFloat(newCardPrice);
  cardTotal.textContent = `$${decrementTotalPrice}`;
  totalCart();
}
function increment(counterProduct, card) {
  counter = counter + 1;
  let increaseCounterProduct = parseInt(counterProduct.textContent) + 1;
  yourCartCounter.textContent = `Your Cart (${counter})`;
  counterProduct.textContent = increaseCounterProduct;
  const cardSelector = card;
  const cardQuantity = cardSelector.querySelector(".addedCart__quantity");
  const cardPrice = cardSelector.querySelector(".addedCart__price").textContent;
  const newCardPrice = cardPrice.replace("$", "");
  const cardTotal = cardSelector.querySelector(".addedCart__total-price");
  cardQuantity.textContent = `${increaseCounterProduct}x`;
  const incrementTotalPrice = increaseCounterProduct * parseFloat(newCardPrice);
  cardTotal.textContent = `$${incrementTotalPrice}`;
  totalCart();
}

waffleIncrement.addEventListener("click", function () {
  increment(waffleCounter, document.querySelector("#Waffle"));
});
waffleDecrement.addEventListener("click", function () {
  decrement(waffleCounter, document.querySelector("#Waffle"));
  if (parseInt(waffleCounter.textContent) >= 1) {
  } else {
    removeCart(waffleButton);
    document.querySelector("#Waffle").remove();
    getEmptyCart();
  }
});

cremeIncrement.addEventListener("click", function () {
  increment(cremeCounter, document.querySelector("#Creme"));
});
cremeDecrement.addEventListener("click", function () {
  decrement(cremeCounter, document.querySelector("#Creme"));
  if (parseInt(cremeCounter.textContent) >= 1) {
  } else {
    removeCart(cremeButton);
    document.querySelector("#Creme").remove();
    getEmptyCart();
  }
});

macaronIncrement.addEventListener("click", function () {
  increment(macaronCounter, document.querySelector("#Macaron"));
});
macaronDecrement.addEventListener("click", function () {
  decrement(macaronCounter, document.querySelector("#Macaron"));
  if (parseInt(macaronCounter.textContent) >= 1) {
  } else {
    removeCart(macaronButton);
    document.querySelector("#Macaron").remove();
    getEmptyCart();
  }
});

tiramisuIncrement.addEventListener("click", function () {
  increment(tiramisuCounter, document.querySelector("#Tiramisu"));
});
tiramisuDecrement.addEventListener("click", function () {
  decrement(tiramisuCounter, document.querySelector("#Tiramisu"));
  if (parseInt(tiramisuCounter.textContent) >= 1) {
  } else {
    removeCart(tiramisuButton);
    document.querySelector("#Tiramisu").remove();
    getEmptyCart();
  }
});

baklavaIncrement.addEventListener("click", function () {
  increment(baklavaCounter, document.querySelector("#Baklava"));
});
baklavaDecrement.addEventListener("click", function () {
  decrement(baklavaCounter, document.querySelector("#Baklava"));
  if (parseInt(baklavaCounter.textContent) >= 1) {
  } else {
    removeCart(baklavaButton);
    document.querySelector("#Baklava").remove();
    getEmptyCart();
  }
});

meringueIncrement.addEventListener("click", function () {
  increment(meringueCounter, document.querySelector("#Pie"));
});
meringueDecrement.addEventListener("click", function () {
  decrement(meringueCounter, document.querySelector("#Pie"));
  if (parseInt(meringueCounter.textContent) >= 1) {
  } else {
    removeCart(meringueButton);
    document.querySelector("#Pie").remove();
    getEmptyCart();
  }
});

cakeIncrement.addEventListener("click", function () {
  increment(cakeCounter, document.querySelector("#Cake"));
});
cakeDecrement.addEventListener("click", function () {
  decrement(cakeCounter, document.querySelector("#Cake"));
  if (parseInt(cakeCounter.textContent) >= 1) {
  } else {
    removeCart(cakeButton);
    document.querySelector("#Cake").remove();
    getEmptyCart();
  }
});

brownieIncrement.addEventListener("click", function () {
  increment(brownieCounter, document.querySelector("#Brownie"));
});
brownieDecrement.addEventListener("click", function () {
  decrement(brownieCounter, document.querySelector("#Brownie"));
  if (parseInt(brownieCounter.textContent) >= 1) {
  } else {
    removeCart(brownieButton);
    document.querySelector("#Brownie").remove();
    getEmptyCart();
  }
});

pannaIncrement.addEventListener("click", function () {
  increment(pannaCounter, document.querySelector("#Panna"));
});
pannaDecrement.addEventListener("click", function () {
  decrement(pannaCounter, document.querySelector("#Panna"));
  if (parseInt(pannaCounter.textContent) >= 1) {
  } else {
    removeCart(pannaButton);
    document.querySelector("#Panna").remove();
    getEmptyCart();
  }
});

function getEmptyCart() {
  if (counter == 0) {
    emptyCart.classList.remove("your-cart__empty-inactive");
    selectedCart.classList.add("your-cart__selected-inactive");
  }
}
