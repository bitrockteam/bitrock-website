import { html, render } from 'lit-html';
import { Router } from '@vaadin/router';
import { $, scrollEffect } from '../libs/dom';
import {
  renderMenu, renderPosts
} from '../libs/render';
import { API, PATHS } from '../consts';
import bitquest from 'bitquest';
import logo from './../assets/BitrockLogo.white.svg';

import './ui/header';
import './ui/logo';

window.addEventListener('vaadin-router-location-changed', e => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  
  $('bitrock-header').setAttribute('active', true);

  const component = e.detail.location.route.component;
  if (component === 'home-page') {
    import(/* webpackChunkName: "page.home" */ './pages/home');
    window.addEventListener('scroll', scrollEffect);
    $('bitrock-header').removeAttribute('active');
  }
  if (component === 'post-single') {
    import(/* webpackChunkName: "single.post" */ './pages/post');
    window.removeEventListener('scroll', scrollEffect);
  }
  if (component === 'page-single') {
    import(/* webpackChunkName: "page" */ './pages/single');
    window.removeEventListener('scroll', scrollEffect);
  }
});

export default class BitrockWebsite extends HTMLElement {

  constructor(){
    super();

    this.cover = 0;
  }

  connectedCallback() {
    this._render();
    this._loadData();
  }

  _setupVaadinRouter() {
    const outlet = document.querySelector('.outlet');
    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/post/:slug', component: 'post-single' },
      { path: '/:slug', component: 'page-single' }
    ]);
  }

  _loadData() {
    Promise.all([
      bitquest(API + PATHS.menu).get(),
      bitquest(API + PATHS.posts()).get()
    ]).then(responses => {
      renderMenu(responses[0]);
      renderPosts(responses[1]);

      this.posts = responses[1];
      this.sticky = [true] || this.posts.filter(e => e.sticky);
      this.cover = true || this.sticky.length;
      $('body').classList.add('ready');
      this._render();
      this._setupVaadinRouter();
    }, error => {
      window.alert('An error has occured while initializing the application, try to reload.');
    });
  }

  _render() {
    const year = new Date().getFullYear();
    const cover = this.cover ? 'cover' : 'no-cover';

    const markup = html`
      <div class=${cover}>
        <bitrock-header></bitrock-header>
        
        <div class="outlet">
          
        </div>

        <footer id="corporate" class="corporate">
          <div class="wrapper">
            <article>
              <div>
                <h4>Corporate</h4>
                <p>
                  <a href="https://www.linkedin.com/company/bitrock-srl/jobs/" target="_blank" rel="noopener">Careers</a> <br>
                  <a href="https://databiz.it/#philosophy" target="_blank" rel="noopener">Group philosophy</a>
               </p>
              </div>
              <div>
                <h4>Milano</h4>
                <p>
                   Sede legale e operativa<br>
                   Via Borsieri 41<br> 
                   20159 Milano (MI)<br>
                   Tel: 0422 1600025<br>
                   <a href="mailto:info@bitrock.it">
                    info@bitrock.it
                  </a>
                </p>
              </div>
              <div>
                <h4>Treviso</h4>
                <p>
                   Sede operativa<br> 
                   Viale della Repubblica 156/a<br> 
                   31100 Treviso (TV)<br>
                   Tel: 0422 1600025 <br>
                   <a href="mailto:info@bitrock.it">
                    info@bitrock.it
                  </a>
                </p>
              </div>
              <div>
                <h4>Follow us</h4>
                <p>
                  <a href="https://www.linkedin.com/company/databiz-group/" target="_blank" rel="noopener">Linkedin</a><br>
                  <a href="https://twitter.com/DATABIZit" target="_blank" rel="noopener">Twitter</a>
                </p>
              </div>
            </article>
          </div>
        </footer>
        <footer class="credits">
          <div class="wrapper">
            <article>
              <figure>
                <img src=${logo} alt="Bitrock">
              </figure>
            
              <p>Copyright ${year} Bitrock s.r.l part of Databiz Group - Partita IVA/C.F.: 10150530961</p>
            </article>
          </div>
        </footer>
      </div>
    `;

    render(markup, this);
  }
}

customElements.define('bitrock-website', BitrockWebsite);