
import { domElement as mock } from './mock';

export const $ = selector => document.querySelector(selector);
export const $$ = selector => document.querySelectorAll(selector);

export const setPosts = posts => {
  const $hp = $('home-page') || mock;
  const ts = new Date().toISOString();
  $hp.posts = posts.slice();
  $hp.setAttribute('posts', ts);
  return posts;
}

export const scrollEffect = evt => {
  const cover = $('section.cover');
  const coverHeight = cover ? cover.clientHeight : 0;
  const condition = window.scrollY > coverHeight;
  const header = $('bitrock-header');
  condition ? header.setAttribute('active', true) :
    header.removeAttribute('active');
}