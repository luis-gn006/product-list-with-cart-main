import AddYourCart from "./AddYourCart.js";
import AddConfirmCart from "./AddConfirmCart.js";
import {
  waffleButton,
  waffleDecrement,
  waffleCounter,
  waffleIncrement,
  cremeButton,
  cremeDecrement,
  cremeCounter,
  cremeIncrement,
  macaronButton,
  macaronDecrement,
  macaronCounter,
  macaronIncrement,
  tiramisuButton,
  tiramisuDecrement,
  tiramisuCounter,
  tiramisuIncrement,
  baklavaButton,
  baklavaDecrement,
  baklavaCounter,
  baklavaIncrement,
  meringueButton,
  meringueDecrement,
  meringueCounter,
  meringueIncrement,
  cakeButton,
  cakeDecrement,
  cakeCounter,
  cakeIncrement,
  brownieButton,
  brownieDecrement,
  brownieCounter,
  brownieIncrement,
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

//Empty Cart
function getEmptyCart() {
  if (counter == 0) {
    emptyCart.classList.remove("your-cart__empty-inactive");
    selectedCart.classList.add("your-cart__selected-inactive");
  }
}

//Counter increase/decrese
function setupCounter(
  incrementButton,
  decrementButton,
  counter,
  itemSelector,
  cartButton
) {
  incrementButton.addEventListener("click", function () {
    increment(counter, document.querySelector(itemSelector));
  });

  decrementButton.addEventListener("click", function () {
    decrement(counter, document.querySelector(itemSelector));
    if (parseInt(counter.textContent) < 1) {
      removeCart(cartButton);
      document.querySelector(itemSelector).remove();
      getEmptyCart();
    }
  });
}

setupCounter(
  waffleIncrement,
  waffleDecrement,
  waffleCounter,
  "#Waffle",
  waffleButton
);
setupCounter(
  cremeIncrement,
  cremeDecrement,
  cremeCounter,
  "#Creme",
  cremeButton
);
setupCounter(
  macaronIncrement,
  macaronDecrement,
  macaronCounter,
  "#Macaron",
  macaronButton
);
setupCounter(
  tiramisuIncrement,
  tiramisuDecrement,
  tiramisuCounter,
  "#Tiramisu",
  tiramisuButton
);
setupCounter(
  baklavaIncrement,
  baklavaDecrement,
  baklavaCounter,
  "#Baklava",
  baklavaButton
);
setupCounter(
  meringueIncrement,
  meringueDecrement,
  meringueCounter,
  "#Pie",
  meringueButton
);
setupCounter(cakeIncrement, cakeDecrement, cakeCounter, "#Cake", cakeButton);
setupCounter(
  brownieIncrement,
  brownieDecrement,
  brownieCounter,
  "#Brownie",
  brownieButton
);
setupCounter(
  pannaIncrement,
  pannaDecrement,
  pannaCounter,
  "#Panna",
  pannaButton
);

//Popup confirm order
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

//Start new order
startNewOrderButton.addEventListener("click", function () {
  closePopup();
  emptyCart.classList.remove("your-cart__empty-inactive");
  selectedCart.classList.add("your-cart__selected-inactive");
  const allButtons = document.querySelectorAll(".add-to-cart");
  allButtons.forEach(removeCart);
  const yourCart = document.querySelector(".your-cart__products");
  yourCart.innerHTML = "";
  yourCart.previousElementSibling.textContent = "Your Cart (0)";
  const allCounter = document.querySelectorAll(".add-to-cart__quantity");
  allCounter.forEach((counter) => {
    counter.textContent = "0";
  });
  counter = 0;
});
