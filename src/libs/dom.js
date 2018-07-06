
export const $ = selector => document.querySelector(selector);

export const $$ = selector => document.querySelectorAll(selector);

export const setPosts = posts => {
  const $hp = $('home-page');
  const ts = new Date().toISOString();
  $hp.posts = posts;
  $hp.setAttribute('posts', ts);
  return posts;
}

export const scrollEffect = evt => {
  const cover = $('section.cover');
  const condition = window.scrollY > cover.clientHeight;
  const header = $('bitrock-header');
  condition ? header.setAttribute('active', true) :
    header.removeAttribute('active');
  // console.log(condition);
}