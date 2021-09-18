export class ShoppingCartItem {

  constructor(product, img = 'https://via.placeholder.com/50x50') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img;
    this.count = product.count;
  }

  render() {
    return `
      <div class="shopping-cart-item" data-id="${this.id_product}">
        <div class="desc">
          <img src="${this.img}" alt="Some img">
          <h3>${this.product_name}</h3>
          <p>${this.price} \u20bd</p>
          <p>${this.count}</p>
          <button>Удалить</button>
        </div>
      </div>`;
  }
}
