
import { $, $$ } from './libs/dom';
import { pagesToMenu } from './libs/data';
import '@webcomponents/custom-elements/src/custom-elements';
import './components/logo';
import './styles/main.scss';

const API = 'http://46.101.81.60/wp-json/wp/v2/';
const nav = $('header nav');
const ham = $('header .fa-bars');

ham.addEventListener('click', evt => {
  nav.classList.add('open');
});

nav.addEventListener('click', evt => {
  nav.classList.remove('open');
});


const renderMenu = response => 
    Promise.resolve(response)
      .then(r => r.json())
      .then(data => pagesToMenu(data))
      .then(titles => titles.map(e => `
        <li><a href="${e.url}">${e.title}</a></li>`))
      .then(li => $('header nav ul').innerHTML = li.join(''));

Promise.all([
  fetch(API + 'pages')
]).then(responses => {
  renderMenu(responses[0]);
  $('body').classList.add('ready');
});