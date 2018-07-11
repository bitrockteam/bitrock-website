
import { formatMenu, filterTags } from './data';
import { $, setPosts } from './dom';
import { store } from './storage';

export const renderMenu = response =>
  Promise.resolve(response)
    .then(data => formatMenu(data))
    .then(menu => store.set('pages', menu))
    .then(json => JSON.stringify(json))
    .then(str => $('bitrock-header').setAttribute('menu', str));

export const renderTags = response =>
  Promise.resolve(response)
    .then(data => filterTags(data))
    .then(json => JSON.stringify(json))
    .then(str => $('bitrock-header').setAttribute('tags', str));

export const renderPosts = response =>
  Promise.resolve(response)
    .then(data => setPosts(data));