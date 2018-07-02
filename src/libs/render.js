
import { pagesToMenu, filterTags } from './data';
import { $, $$, applyCover, setPosts } from './dom';

export const renderMenu = response =>
  Promise.resolve(response)
    // .then(r => r.json())
    .then(data => pagesToMenu(data))
    .then(json => JSON.stringify(json))
    .then(str => $('bitrock-header').setAttribute('menu', str));
    // .then(titles => titles.map(e => `
    //   <li><a href="${e.url}">${e.title}</a></li>`))
    // .then(li => $('header nav ul').innerHTML = li.join(''));

export const renderTags = response =>
  Promise.resolve(response)
    .then(data => filterTags(data))
    .then(json => JSON.stringify(json))
    .then(str => $('bitrock-header').setAttribute('tags', str));

export const renderPosts = response =>
  Promise.resolve(response)
    .then(data => setPosts(data))
    .then(data => data.filter(e => e.sticky))
    .then(sticky => applyCover(sticky))