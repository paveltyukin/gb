'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');
const cartPopup = document.querySelector('#cart_popup');
const productCount = document.querySelector('.cartIconWrap span');
productCount.innerHTML = '0';

fitlerLabel.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

let cartProducts = [];

const renderCart = () => {
    cartPopup.innerHTML = '';
    let tr = '';
    let totalSum = 0;
    let totalCount = 0;
    cartProducts.forEach((cartProduct) => {
        const currentProductSum = cartProduct.price.slice(1) * cartProduct.count;
        totalSum += currentProductSum;
        totalCount += cartProduct.count;

        tr += `
          <tr>
            <td>${cartProduct.name}</td>
            <td>${cartProduct.count} шт.</td>
            <td>${cartProduct.price}</td>
            <td>$${currentProductSum}</td>
          </tr>`;
    });

    cartPopup.innerHTML = `
      <table>
        <tr>
          <th>Название товара</th>
          <th>Количество</th>
          <th>Цена за шт.</th>
          <th>Итого</th>
        </tr>
        ${tr}
      </table>
      Итого товаров на сумму: $${totalSum}`;
    productCount.innerHTML = totalCount;
};

const featuredImgDark = 1;

document.querySelectorAll('.featuredImgDark button').forEach((button) => {
    button.addEventListener('click', ({ target }) => {
        const name = target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerText,
          price = target.parentNode.parentNode.parentNode.querySelector('.featuredPrice').innerText,
          productCount = cartProducts.filter((product) => product.name === name).length + 1;

        if (productCount === 1) {
            cartProducts.push({ name, price, count: productCount });
        }
        else {
            cartProducts.forEach((cartProduct) => {
                if (cartProduct.name === name) {
                    cartProduct.count = productCount
                }
            });
        }

        renderCart();
    });
});

document.querySelector('.cartIcon')
    .addEventListener('click', (e) => {
        const params = e.target.getBoundingClientRect();
        cartPopup.style.top = (params.top + 41) + 'px';
        cartPopup.style.right = (window.innerWidth - params.right) + 'px';
        cartPopup.classList.toggle('hidden');
});

window.addEventListener('scroll', () => {
    cartPopup.classList.add('hidden')
});


















