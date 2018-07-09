
import { scrollEffect } from './libs/dom';

import '@webcomponents/custom-elements/src/custom-elements';
import './components/app';

import './styles/main.scss';

const prod = process.env.NODE_ENV === 'production';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log(reg);
      });
    // navigator.serviceWorker.register('./sw.fetch.js')
    //   .then(reg => {
    //     console.log(reg);
    //   });
  });
}

window.addEventListener('scroll', scrollEffect);