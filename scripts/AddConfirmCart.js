class AddConfirmCart {
  constructor(heading, price, totalPrice, image, templateSelector, quantity) {
    this._heading = heading;
    this._price = price;
    this._totalPrice = totalPrice;
    this._image = image;
    this._templateSelector = templateSelector;
    this._quantity = quantity;
  }
  _getTemplate() {
    const cartElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".confirmCart")
      .cloneNode(true);

    return cartElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.setAttribute("id", `${this._heading}`);
    this._element.querySelector(".confirmCart__image").src = this._image;
    this._element.querySelector(
      ".confirmCart__image"
    ).alt = `imagen de ${this._heading}`;
    this._element.querySelector(".confirmCart__title").textContent =
      this._heading;
    this._element.querySelector(".confirmCart__total-price").textContent =
      this._price;
    this._element.querySelector(
      ".confirmCart__price"
    ).textContent = `@${this._totalPrice}`;
    this._element.querySelector(".confirmCart__quantity").textContent =
      this._quantity;

    return this._element;
  }
}

export default AddConfirmCart;
