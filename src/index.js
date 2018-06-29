
import { $, $$ } from './libs/dom';
import { 
  renderMenu, renderPosts, renderTags 
} from './libs/render';
import { pagesToRoutes } from './libs/data';
import { router } from './libs/routing';
import bitquest from 'bitquest';

import '@webcomponents/custom-elements/src/custom-elements';
import './components/logo';
import './components/header';
import './components/app';

import './styles/main.scss';

const API = 'http://54.199.243.153/wp-json/wp/v2/';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

window.addEventListener('scroll', evt => {
  const cover = $('section.cover');
  const condition = window.scrollY > cover.clientHeight;
  const header = $('bitrock-header');
  condition ? header.setAttribute('active', true) : 
    header.removeAttribute('active');
  // console.log(condition);
});