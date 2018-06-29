
export const $ = selector => document.querySelector(selector);

export const $$ = selector => document.querySelectorAll(selector);

export const applyCover = sticky => {
  const body = document.body.classList;
  return sticky.length ? body.add('cover') : body.add('no-cover');
}