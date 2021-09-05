const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title = 'Phone', price = 101) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = (
  list = [
    { id: Math.floor(Math.random() * 10000), title: 'Phone', price: 101 }
  ]
) => {
  // 2
  // Можно вызвать просто renderProducts или renderProduct без параметров.
  // Подставятся параметры по умолчанию
  // Я бы передавал объект целиком в renderProduct(item), потому что нужен id
  // в renderProduct принимал через spread
/*
const renderProduct = ({ id: Math.floor(Math.random() * 10000), title = 'Phone', price = 101 }) => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const productList = list.map((item) => renderProduct(item));
document.querySelector('.products').innerHTML = productList.join('');
*
* */
  const productList = list.map((item) => renderProduct(item.title, item.price));
  document.querySelector('.products').innerHTML = productList.join('');

  // 3
  /*
  * Запятая выводится: console.log(productList.toString());
    <div class="product-item">
      <h3>Notebook</h3>
      <p>1000</p>
      <button class="by-btn">Добавить</button>
    </div>,<div class="product-item">
      <h3>Mouse</h3>
      <p>100</p>
      <button class="by-btn">Добавить</button>
    </div>,<div class="product-item">
      <h3>Keyboard</h3>
      <p>250</p>
      <button class="by-btn">Добавить</button>
    </div>,<div class="product-item">
      <h3>Gamepad</h3>
      <p>150</p>
      <button class="by-btn">Добавить</button>
    </div>
  * */
  // исправить - join('');
};

renderProducts(products);
