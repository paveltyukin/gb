import { API } from './constants.js';
import { ProductItem } from './ProductItem.js';
import { getRequest } from './getRequest.js';

export class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];
  }

  getProductById(id) {
    const product = this.#goods.find((item) => item.id_product === id);
    return product ?? [];
  }

  fetchGoods() {
    return getRequest(`${API}/catalogData.json`)
      .then((data) => {
        try {
          this.#goods = JSON.parse(data);
          console.log(this.#goods);
          this.#render();
        }
        catch (e) {
          console.log(e);
        }
      });
  }

  sum() {
    return this.#allProducts.reduce((sum, { price }) => sum + price, 0);
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }
}
