export class ReplacerSingleQuotes {

  #el;

  constructor(selector) {
    this.#el = document.document.querySelector(selector);
  }

  simpleReplace() {
    this.#el.innerHTML = this.#el.textContent.trim().replace(/'/gm, '"');
  }

  hardReplace() {
    this.#el.innerHTML = this.#el.textContent.trim().replace(/\B'|'\B/gm, '"');
  }
}
