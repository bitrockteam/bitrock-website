import { html, render } from 'lit-html/lib/lit-extended';
import { router } from './../libs/routing';
import { $, scrollEffect } from './../libs/dom';
import {
  renderMenu, renderPosts, renderTags
} from './../libs/render';
import { pagesToRoutes } from './../libs/data';
import { API } from './../consts';
import bitquest from 'bitquest';

import './header';
import './link';
import './logo';
import './pages/home';
import './pages/discover';

const BG = require("./../assets/img/main_bg.jpg");

export default class BitrockWebsite extends HTMLElement {

  connectedCallback() {
    this.page = 'home-page';
    this._render();
    this._loadData();

    router.addListener(route => {
      console.log(route);
      this.page = route.name;
      if(this.page === 'home-page'){
        $('body').classList.add('cover');
        $('body').classList.remove('no-cover');
        window.addEventListener('scroll', scrollEffect);
      } else {
        $('body').classList.remove('cover');
        $('body').classList.add('no-cover');
        window.removeEventListener('scroll', scrollEffect);
      }    
      this._render();
    });
  }

  _loadData() {
    Promise.all([
      bitquest(API + 'pages').get(),
      bitquest(API + 'tags').get(),
      bitquest(API + 'posts').get()
    ]).then(responses => {
      renderMenu(responses[0]);
      renderTags(responses[1]);
      renderPosts(responses[2]);
      $('body').classList.add('ready');

      const routes = pagesToRoutes(responses[0])
      router.add(routes);
    }, error => {
      // $('body').classList.add('ready');
      window.alert('An error has occured while initializing the application, try to reload.');
    });
  }

  _currentPage() {
    const page = document.createElement(this.page);
    return html`${page}`;
  }

  _render() {
    const year = new Date().getFullYear();

    const markup = html`
      <div class="wrapper">
        <bitrock-header></bitrock-header>
        
        ${this._currentPage()}

        <footer>
          <p>Copyright ${year} Databiz Group s.r.l. - Partita IVA/C.F.: 04268680263</p>
        </footer>
      </div>
    `;

    render(markup, this);
  }
}

customElements.define('bitrock-website', BitrockWebsite);