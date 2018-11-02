import { html, render } from 'lit-html';
import { Router } from '@vaadin/router';
import { $, scrollEffect } from '../libs/dom';
import { renderMenu } from '../libs/render';
import { API, PATHS } from '../consts';
import bitquest from 'bitquest';
import logo from './../assets/BitrockLogo.white.svg';

import './ui/header';
import './ui/logo';

window.addEventListener('vaadin-router-location-changed', e => {
  const page_path = e.detail.location.pathname;
  gtag('config', 'UA-127344693-1', { page_path });
  // console.log(page_path);

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  
  $('bitrock-header').setAttribute('active', true);

  const component = e.detail.location.route.component;
  const path = e.detail.location.route.path;
  
  // if (component === 'home-page') {
  if (path === '/') {
    import(/* webpackChunkName: "page.home" */ './pages/home');
    window.addEventListener('scroll', scrollEffect);
    $('bitrock-header').removeAttribute('active');
  }
  // if (component === 'post-single') {
  if (path === '/post/:slug') {
    import(/* webpackChunkName: "single.post" */ './pages/post');
    window.removeEventListener('scroll', scrollEffect);
  }
  // if (component === 'page-single') {
  if (path === '/:slug') {
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
    this._loadData();
  }

  _setupVaadinRouter() {
    const outlet = document.querySelector('.outlet');
    const router = new Router(document.querySelector('#dummy-outlet'));

    router.setRoutes({
      path: '/',
      action: async (context) => {
        // let Vaadin Router do its job: resolve the pathname
        // and return a TemplateResult 
        const resolution = await context.next();

        // if it's not a 404 render the TemplateResult with lit-html
        if (resolution) {
          render(resolution.result, outlet);
          return outlet;
        }
      },
      children: [
        // the actual routes config
        { 
          path: '/', 
          action: (context) => html`<home-page></home-page>` 
        },
        { 
          path: '/post/:slug', 
          action: (context) => html`
            <post-single .location=${context}></post-single>` 
        },
        { 
          path: '/:slug', 
          action: (context) => html`
            <page-single 
              location=${JSON.stringify(context.params)}
            ></page-single>` 
        },
      ]
    });
  }

  _loadData() {
    Promise.all([
      bitquest(API + PATHS.menu).get(),
    ]).then(responses => {
      renderMenu(responses[0]);

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
                  <a href="https://databiz.it/#philosophy" target="_blank" rel="noopener">Group philosophy</a> <br>
                  <a href="https://www.iubenda.com/privacy-policy/81384922" target="_blank" rel="noopener">Privacy policy</a>
               </p>
              </div>
              <div>
                <h4>Milano</h4>
                <p>
                   Office and Operational HQ<br>
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
                   Operational HQ<br> 
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

    return render(markup, this);
  }
}

customElements.define('bitrock-website', BitrockWebsite);