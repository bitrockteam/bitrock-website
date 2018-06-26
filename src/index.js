
import { $, $$ } from './libs/dom';
import { pagesToMenu } from './libs/data';
import bitquest from 'bitquest';
import '@webcomponents/custom-elements/src/custom-elements';
import './components/logo';
import './components/header';
import './styles/main.scss';

const API = 'http://46.101.81.60/wp-json/wp/v2/';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

const init = () => {
  const nav = $('header nav');
  const ham = $('header .fa-bars');

  ham.addEventListener('click', evt => {
    nav.classList.add('open');
  });

  nav.addEventListener('click', evt => {
    nav.classList.remove('open');
  });
}

window.addEventListener('scroll', evt => {
  const cover = $('section.cover');
  const condition = window.scrollY > cover.clientHeight;
  const header = $('bitrock-header');
  condition ? header.setAttribute('active', true) : 
    header.removeAttribute('active');
});

const renderMenu = response => 
    Promise.resolve(response)
      // .then(r => r.json())
      .then(data => pagesToMenu(data))
      .then(titles => titles.map(e => `
        <li><a href="${e.url}">${e.title}</a></li>`))
      // .then(li => $('header nav ul').innerHTML = li.join(''));

Promise.all([
  bitquest(API + 'pages').get()
]).then(responses => {
  renderMenu(responses[0]);
  $('body').classList.add('ready');
  init();
}, error => {
  $('body').classList.add('ready');
  init();
});