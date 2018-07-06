
import { scrollEffect } from './libs/dom';

import '@webcomponents/custom-elements/src/custom-elements';
import './components/app';

import './styles/main.scss';

const prod = process.env.NODE_ENV === 'production';

if ('serviceWorker' in navigator && prod) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

window.addEventListener('scroll', scrollEffect);