import { html, render } from 'lit-html/lib/lit-extended';
import { router } from '../libs/routing';
import { lastVisited } from '../libs/storage';
import { $, scrollEffect } from '../libs/dom';
import {
  renderMenu, renderPosts, renderTags
} from '../libs/render';
import { pagesToRoutes } from '../libs/data';
import { API, PATHS } from '../consts';
import bitquest from 'bitquest';
import logo from './../assets/BitrockLogo.white.svg';

import './header';
import './ui/link';
import './logo';
// import './pages/home';
// import './pages/post';
// import './pages/contacts';
// import './pages/academy';

export default class BitrockWebsite extends HTMLElement {

  constructor(){
    super();

    this.cover = 0;
  }

  _routing(route) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.page = route.name;
    lastVisited.set(route);
    
    switch(route.name){
      case 'home-page':
        import(/* webpackChunkName: "page.home" */ './pages/home');
        this.cover = this.sticky.length;
        window.addEventListener('scroll', scrollEffect);
        break;
      case 'post.single':
        import(/* webpackChunkName: "page.post" */ './pages/post');
        this.page = route.name.replace('.', '-');
        this.pageId = route.params.id;
        break;
      case 'discover':
        import(/* webpackChunkName: "page.discover" */ './pages/discover');
        this.page = 'discover-us';
        break;
      case 'academy':
        import(/* webpackChunkName: "page.academy" */ './pages/academy');
        this.page = 'bitrock-academy';
        break;
      default:
        this.page = route.name;
        this.cover = 0;
        window.removeEventListener('scroll', scrollEffect);
    }

    if(route.name !== 'home-page'){
      this.cover = 0;
      window.removeEventListener('scroll', scrollEffect);
    }

    this._render();
  }

  _setupRouter(data) {
    const routes = pagesToRoutes(data);
    router.add(routes)

    const last = lastVisited.get();
    last ? 
      router.navigate(last.name, last.params) : 
      import(/* webpackChunkName: "page.home" */ './pages/home');
  }

  connectedCallback() {
    this.page = 'home-page';
    this._render();
    this._loadData();

    router.addListener(route => this._routing(route));
  }

  _loadData() {
    Promise.all([
      bitquest(API + PATHS.menu).get(),
      // bitquest(API + PATHS.tags).get(),
      bitquest(API + PATHS.posts).get()
    ]).then(responses => {
      renderMenu(responses[0]);
      // renderTags(responses[1]);
      renderPosts(responses[1]);

      this.posts = responses[1];
      this.sticky = [true] || this.posts.filter(e => e.sticky);
      this.cover = true || this.sticky.length;
      $('body').classList.add('ready');
      this._render();
      this._setupRouter(responses[0]);
    }, error => {
      // $('body').classList.add('ready');
      window.alert('An error has occured while initializing the application, try to reload.');
    });
  }

  _currentPage() {
    const page = document.createElement(this.page);
    this.pageId ? page.id = this.pageId : null;
    this.pageId = null;
    return html`${page}`;
  }

  _render() {
    const year = new Date().getFullYear();
    const cover = this.cover ? 'cover' : 'no-cover';

    const markup = html`
      <div class$=${cover}>
        <bitrock-header></bitrock-header>
        
        ${this._currentPage()}

        <footer id="corporate" class="corporate">
          <div class="wrapper">
            <article>
              <div>
                <h4>Corporate</h4>
                <p>
                  Group philosophy<br> 
                  CSR
               </p>
              </div>
              <div>
                <h4>Treviso</h4>
                <p>
                   Sede legale e operativa<br> 
                   Viale della Repubblica 156/a<br> 
                   31100 Treviso (TV)<br>
                   Tel: 0422 1600025
                </p>
              </div>
              <div>
                <h4>Milano</h4>
                <p>
                   Sede operativa<br>
                   Via Borsieri 41<br> 
                   20159 Milano (MI)<br>
                   Tel: 0422 1600025<br>
                   <a href="mailto:info@bitrock.it">
                    info@databiz.it
                  </a>
                </p>
              </div>
              <div>
                <h4>Follow us</h4>
                <p>
                  Linkedin<br>
                  Twitter
                </p>
              </div>
            </article>
          </div>
        </footer>
        <footer class="credits">
          <div class="wrapper">
            <article>
              <figure>
                <img src="${logo}" alt="Bitrock">
              </figure>
            
              <p>Copyright ${year} Databiz Group s.r.l. - Partita IVA/C.F.: 04268680263</p>
            </article>
          </div>
        </footer>
      </div>
    `;

    render(markup, this);
  }
}

customElements.define('bitrock-website', BitrockWebsite);