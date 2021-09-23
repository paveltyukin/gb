export class Validation {

  #form;
  #validateBtn;
  #fields;
  #isValid = false;

  #fieldsRules = {
    phone: {
      error: 'Введите правильный номер телефона',
      pattern: /\+7\(\d{3}\)\d{3}-\d{4}/,
    },
    email: {
      error: 'Введите правильный email',
      pattern: /^[a-z\.-]+@[a-z]+\.[a-z]+/,
    },
  };

  constructor() {
    this.init();
    this.addListeners();
  }

  init() {
    this.#form = document.querySelector('.formWithValidation');
    this.#validateBtn = this.#form.querySelector('.validateBtn');
    this.#fields = this.#form.querySelectorAll('.field');
  }

  addListeners() {
    this.#form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.validate();

      if (this.#isValid) {
        alert('OK');
      }
    });
  }

  generateError(el, text) {
    const error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = text;

    el.style.border = '1px solid red';

    el.insertAdjacentElement('afterend', error);
    this.#isValid = false;
  }

  removeErrors() {
    const errors = this.#form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }

    for (let i = 0; i < this.#fields.length; i++) {
      this.#fields[i].style.border = '1px solid grey'
    }
  }

  validate() {
    this.removeErrors();

    this.#isValid = true;
    for (let i = 0; i < this.#fields.length; i++) {
      const el = this.#fields[i],
        field = el.getAttribute('name');

      if ('pattern' in this.#fieldsRules[field]) {
        if (!this.#fieldsRules[field].pattern.test(el.value)) {
          this.generateError(el, this.#fieldsRules[field].error);
        }
      }
    }
  }
}
