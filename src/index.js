
import { $, $$ } from './libs/dom';
import './components/logo';
import './styles/main.scss';

const nav = $('header nav');
const ham = $('header i');

ham.addEventListener('click', evt => {
  nav.classList.add('open');
});

nav.addEventListener('click', evt => {
  nav.classList.remove('open');
});