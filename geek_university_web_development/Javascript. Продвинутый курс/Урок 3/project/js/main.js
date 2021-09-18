import { ProductList } from './ProductList.js';
import { ShoppingCart } from './ShoppingCart.js';

const list = new ProductList();
const shoppingCart = new ShoppingCart();
list.fetchGoods()
  .then(() => {
    document.querySelector('.buy-btn')
      .addEventListener('click', ({ target }) => {
        const id = +target.parentElement.parentElement.getAttribute('data-id');
        const product = list.getProductById(id);

        shoppingCart.add(product);
      });
  });
