export class AddConfirmCart {
  constructor(heading, price, image, templateSelector) {
    this._heading = heading;
    this._price = price;
    this._image = image;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cartElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".addedCart")
      .cloneNode(true);

    return cartElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.setAttribute("id", `${this._heading}`);
    this._element.querySelector(".addedCart__price").textContent = this._price;
    this._element.querySelector(".addedCart__heading").textContent =
      this._heading;
    this._element.querySelector(".addedCart__quantity").textContent = "1x";
    this._element.querySelector(".addedCart__total-price").textContent =
      this._price;
    this._element.querySelector(".addedCart__image").src = this._image;

    return this._element;
  }
}
