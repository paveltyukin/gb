export class Hamburger {

  // строка: Маленький, Большой
  #hamburgers = [
    { id: 1, size: 'Маленький', price: 50, calories: 20, count: 0 },
    { id: 1, size: 'Большой', price: 100, calories: 40, count: 0 },
  ];

  /*
  * начинка
  * строка
  *
  * сыр (+10 рублей, +20 калорий).
  * салат (+20 рублей, +5 калорий).
  * картофель (+15 рублей, +10 калорий).
  *
  * Дополнительно
  * посыпать приправой (+15 рублей, +0 калорий)
  * полить майонезом (+20 рублей, +5 калорий)
  * */
  #stuffings = [
    { id: 1, staffing: 'Сыр', price: 10, calories: 20, count: 0 },
    { id: 2, staffing: 'Салат', price: 20, calories: 5, count: 0 },
    { id: 3, staffing: 'Картофель', price: 15, calories: 10, count: 0 },
    { id: 4, staffing: 'Посыпать приправой', price: 15, calories: 0, count: 0 },
    { id: 5, staffing: 'Полить майонезом', price: 20, calories: 5, count: 0 },
  ];

  constructor(sizeOfHamburger = 'Маленький', stuffing = 'Сыр') {
    this.setHamburger(sizeOfHamburger);
    this.addTopping(stuffing);
  }

  setHamburger(sizeOfHamburger) {
    this.#hamburgers.forEach((item, idx) => {
      if (item.size === sizeOfHamburger) {
        item.count++;
      }
    });
  }

  // Добавить добавку
  addTopping(topping) {
    this.#stuffings.forEach((item) => {
      if (item.staffing === topping) {
        item.count++;
      }
    });
  }

  // Убрать добавку
  removeTopping(topping) {
    this.#stuffings.forEach((item) => {
      if (item.staffing === topping && item.count > 0) {
        item.count--;
      }
    });
  }

  #getStuffingListByKey(key) {
    return this.#stuffings.reduce((accum, currentValue) => {
      if (currentValue.count > 0) {
        accum.push(currentValue[key]);
      }

      return accum;
    }, []);
  }

  #getHamburgerListByKey(key) {
    return this.#hamburgers.reduce((accum, currentValue) => {
      if (currentValue.count > 0) {
        accum.push(currentValue[key]);
      }

      return accum;
    }, []);
  }

  // Получить список добавок
  getToppings() {
    return this.#stuffings;
  }

  // Узнать размер гамбургера
  getSize() {
    return `Размер гамбургера: ${this.#getHamburgerListByKey('size').join(', ')}`
  }

  // Узнать начинку гамбургера
  getStuffing() {
    return `Текущие начинки: ${this.#getStuffingListByKey('staffing').join(', ')}`
  }

  // Узнать цену
  calculatePrice() {
    const price = this.#stuffings.reduce((accum, currentValue) => {
      if (currentValue.count > 0) {
        accum += currentValue.price;
      }

      return accum;
    }, 0);
    return `Текущая цена: ${price}`
  }

  // Узнать калорийность
  calculateCalories() {
    const calories = this.#stuffings.reduce((accum, currentValue) => {
      if (currentValue.count > 0) {
        accum += currentValue.calories;
      }

      return accum;
    }, 0);

    return `Текущие калории: ${calories}`
  }
}
