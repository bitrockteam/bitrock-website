
import { scrollEffect } from './libs/dom';

import './styles/main.scss';

const prod = process.env.NODE_ENV === 'production';
const app = () => import(
  /* webpackChunkName: "app" */  
  './components/app');

if(!window.customElements) {
  import( /* webpackChunkName: "custom-elements" */ 
    '@webcomponents/custom-elements/src/custom-elements'
  ).then(() => app());
} else {
  app();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        // console.log(reg);
      });
    // navigator.serviceWorker.register('./sw.fetch.js')
    //   .then(reg => {
    //     console.log(reg);
    //   });
  });
}

window.addEventListener('scroll', scrollEffect);

// Javascript disabled warning
document.querySelector('.js-warning').style.display = 'none';