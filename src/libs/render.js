
import { formatMenu, filterTags } from './data';
import { $, setPosts } from './dom';

export const renderMenu = response =>
  Promise.resolve(response)
    // .then(r => r.json())
    .then(data => formatMenu(data))
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
    .then(data => setPosts(data));