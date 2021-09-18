import { ShoppingCartItem } from './ShoppingCartItem.js';

export class ShoppingCart {

  /*
  * Элементы отрисовки
  * */
  #products;

  constructor(container = '.btn-cart') {
    this.container = container;
    this.#products = [];
  }

  /*
  * Отрисовка корзины товаров
  * */
  #render() {

  }

  #getCountProductsById(id) {
    const product = this.#products.find((product) => product.id_product === id);
    return product ? product.count : 1;
  }

  /*
  * Добавить элементы в корзину
  * */
  add(product) {
    const productObject = {
      id_product: product.id_product,
      price: product.price,
      product_name: product.product_name,
      count: this.#getCountProductsById(product.id_product),
    }

    this.remove(product.id_product);
    this.#products.push(productObject);

    const shoppingCartItem = new ShoppingCartItem(productObject);

    document.querySelector('.cart').insertAdjacentHTML('beforeend', shoppingCartItem.render());
  }

  /*
  * Удалить элементы из корзины
  * */
  remove(id) {
    const index = this.#products.findIndex((product) => product.id_product === id);

    if (index !== -1) {
      this.#products.splice(index, 1);
    }
  }

  /*
  * Получить элементы в корзине
  * */
  getItems() {
    return this.#products;
  }

  /*
  * Какое-то дефолтное состояние поддерживать
  * */
  #resetState() {}
}
