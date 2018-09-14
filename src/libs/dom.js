
import { domElement as mock } from './mock';

export const $ = selector => document.querySelector(selector);
export const $$ = selector => document.querySelectorAll(selector);

export const setPosts = posts => {
  const $hp = $('home-page') || mock;
  const ts = new Date().toISOString();
  // $hp.posts = checkSticky(posts);
  $hp.posts = posts.slice();
  $hp.setAttribute('posts', ts);
  return posts;
}

export const checkSticky = posts => {
  const sticky = posts.filter(e => e.sticky);
  return sticky.length ? setSticky(posts) : posts
}

export const setSticky = posts => {
  const $hero = $('rock-hero') || mock;
  const ts = new Date().toISOString();
  $hero.data = posts.filter(e => e.sticky)[0];
  $hero.setAttribute('data', ts);
  return posts.filter(e => !e.sticky);
}

export const scrollEffect = evt => {
  const cover = $('section.cover');
  const condition = window.scrollY > cover.clientHeight;
  const header = $('bitrock-header');
  condition ? header.setAttribute('active', true) :
    header.removeAttribute('active');
}