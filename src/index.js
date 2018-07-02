
import { scrollEffect } from './libs/dom';

import '@webcomponents/custom-elements/src/custom-elements';
import './components/app';

import './styles/main.scss';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}

window.addEventListener('scroll', scrollEffect);