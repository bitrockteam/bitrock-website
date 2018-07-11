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
      case 'contact-us':
        import(/* webpackChunkName: "page.contacts" */ './pages/contacts');
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
    router.add(routes);

    const last = lastVisited.get();
    router.navigate(last.name, last.params);
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
      bitquest(API + PATHS.tags).get(),
      bitquest(API + PATHS.posts).get()
    ]).then(responses => {
      renderMenu(responses[0]);
      renderTags(responses[1]);
      renderPosts(responses[2]);

      this.posts = responses[2];
      this.sticky = this.posts.filter(e => e.sticky);
      this.cover = this.sticky.length;
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
      <div class$="wrapper ${cover}">
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