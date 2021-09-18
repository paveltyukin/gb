export class ProductItem {

  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
  }

  render() {
    return `
      <div class="product-item" data-id="${this.id_product}">
        <img src="${this.img}" alt="Some img">
        <div class="desc">
          <h3>${this.product_name}</h3>
          <p>${this.price} \u20bd</p>
          <button class="buy-btn">Купить</button>
        </div>
      </div>`;
  }
}
