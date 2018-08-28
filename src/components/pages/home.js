import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { setPosts } from '../../libs/dom';
import { getFeatImage } from '../../libs/data';
import { router } from '../../libs/routing';
import { post as mock } from '../../libs/mock';
import { API, PATHS } from '../../consts';
import '../cover';
import '../ui/link';

export default class HomePage extends HTMLElement {
  static get observedAttributes() {
    return ['posts'];
  }

  constructor(){
    super();
    this.posts = [];
    this.latest = Array.from(Array(2), x => mock());
    this.older = Array.from(Array(8), x => mock());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.older = this.posts.slice();
    this._render(false);
  }

  connectedCallback(){
    this._render(true);
    bitquest(API + PATHS.posts).get()
      .then(data => setPosts(data));
  }

  _navigate(evt) {
    evt.preventDefault();
    const id = evt.target.dataset.id;
    const slug = evt.target.dataset.slug;
    router.navigate('post.single', { id, slug });
  }

  _render(loading) {
    const optimistic = loading ? 'loading' : '';

    const posts = data => html`
      <div class="block">
        <div class="card">
          <header>
            <figure>
              <img src=${getFeatImage(data._embedded)} alt="">
            </figure>
          </header>
          <h4>${unsafeHTML(data.title.rendered)}</h4>
          ${unsafeHTML(data.excerpt.rendered)}
          <p>
            <a 
              data-id$="${data.id}" 
              data-slug$="${data.slug}" 
              href="/post/${data.slug}"
              on-click="${this._navigate}"
            >read more</a>
          </p>
        </div>
      </div>
    `;

    const markup = html`
      <rock-hero></rock-hero>

      <main class$="wrapper ${optimistic}">
        ${this.older.map(e => posts(e))}
        <!-- <i class="fas fa-circle-notch fa-spin"></i> -->
      </main>
    `;

    render(markup, this);
  }
}

customElements.define('home-page', HomePage);