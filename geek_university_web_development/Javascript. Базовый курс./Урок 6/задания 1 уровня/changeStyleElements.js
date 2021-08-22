export const changeStyleElements = (selector, styleName, params) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    el.style[styleName] = params
  });
};
