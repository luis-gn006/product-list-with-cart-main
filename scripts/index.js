import AddYourCart from "./AddYourCart.js";
import AddConfirmCart from "./AddConfirmCart.js";
import {
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
} from "./constants.js";
let counter = 0;

function totalCart() {
  let totalPrice = [];
  const allAddedCartTotalPrice = document.querySelectorAll(
    ".addedCart__total-price"
  );
  allAddedCartTotalPrice.forEach((product) => {
    let priceWitout$ = product.textContent.replace("$", "");
    let priceNumber = Number(priceWitout$);
    totalPrice.push(priceNumber);
    let totalPriceSum = totalPrice.reduce((a, b) => a + b, 0);
    yourCartTotalPrice.textContent = `$${totalPriceSum.toFixed(2)}`;
    popupOrderTotal.textContent = `$${totalPriceSum.toFixed(2)}`;
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
  cardTotal.textContent = `$${decrementTotalPrice.toFixed(2)}`;
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
  cardTotal.textContent = `$${incrementTotalPrice.toFixed(2)}`;
  totalCart();
}

function getEmptyCart() {
  if (counter == 0) {
    emptyCart.classList.remove("your-cart__empty-inactive");
    selectedCart.classList.add("your-cart__selected-inactive");
  }
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
const popupOrderTotal = document.querySelector(".popup__order-total-price");
//Popup
confirmOrderButton.addEventListener("click", function () {
  document.querySelector(".popup").classList.add("popup__open");
  document.addEventListener("keydown", escClose);
  document.addEventListener("click", (evt) => {
    clickOutClosePopup(evt);
  });

  const allAddedCart = document.querySelectorAll(".addedCart");
  const arrayAllAddedCart = Array.from(allAddedCart);
  arrayAllAddedCart.forEach((product) => {
    const newProduct = new AddConfirmCart(
      product.querySelector(".addedCart__heading").textContent,
      product.querySelector(".addedCart__total-price").textContent,
      product.querySelector(".addedCart__price").textContent,
      product.querySelector(".addedCart__image").src,
      ".confirmCart__template",
      product.querySelector(".addedCart__quantity").textContent
    );
    const producConfirmItem = newProduct.generateCard();
    popupConfirmedProducts.prepend(producConfirmItem);
  });
});

const popupConfirmedProducts = document.querySelector(".popup__order-products");

function closePopup() {
  document.querySelector(".popup").classList.remove("popup__open");
  document.removeEventListener("click", (evt) => {});
  popupConfirmedProducts.innerHTML = "";
}

function escClose(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
  document.removeEventListener("keydown", escClose);
}
function clickOutClosePopup(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup();
  }
}

startNewOrderButton.addEventListener("click", function () {
  closePopup();
  emptyCart.classList.remove("your-cart__empty-inactive");
  selectedCart.classList.add("your-cart__selected-inactive");
  removeCart(waffleButton);
  removeCart(cremeButton);
  removeCart(macaronButton);
  removeCart(tiramisuButton);
  removeCart(baklavaButton);
  removeCart(meringueButton);
  removeCart(cakeButton);
  removeCart(brownieButton);
  removeCart(pannaButton);
  const yourCart = document.querySelector(".your-cart__products");
  yourCart.innerHTML = "";
  yourCart.previousElementSibling.textContent = "Your Cart (0)";
  waffleCounter.textContent = "0";
  cremeCounter.textContent = "0";
  macaronCounter.textContent = "0";
  tiramisuCounter.textContent = "0";
  baklavaCounter.textContent = "0";
  meringueCounter.textContent = "0";
  cakeCounter.textContent = "0";
  brownieCounter.textContent = "0";
  pannaCounter.textContent = "0";
});

export {
  totalCart,
  setItemRemoveButton,
  setItemAddCartButton,
  removeCart,
  decrement,
  increment,
  getEmptyCart,
};
