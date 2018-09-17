import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { updateMetadata } from 'pwa-helpers/metadata';
import { setPosts } from '../../libs/dom';
import { getFeatImage, getCategory } from '../../libs/data';
import { router } from '../../libs/routing';
import { post as mock } from '../../libs/mock';
import { API, PATHS } from '../../consts';
import ogImg from './../../assets/social.png';
import pkg from './../../../package.json';
import './../ui/cover';
import './../ui/link';

export default class HomePage extends HTMLElement {
  static get observedAttributes() {
    return ['posts'];
  }

  constructor(){
    super();

    this.posts = Array.from(Array(8), x => mock());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render(false);
  }

  connectedCallback(){
    this._render(true);
    bitquest(API + PATHS.posts).get()
      .then(data => setPosts(data));

    updateMetadata({
      title: pkg.displayName,
      description: pkg.description,
      url: document.location.href,
      image: ogImg
    });
  }

  _navigate(evt) {
    evt.preventDefault();
    const t = evt.currentTarget;
    const id = t.dataset.id;
    const slug = t.dataset.slug;
    router.navigate('post.single', { id, slug });
  }

  _render(loading) {
    const optimistic = loading ? 'loading' : '';

    const posts = data => html`
      <div class="block">
        <div class="card">
          <a
            data-id$=${data.id}
            data-slug$=${data.slug} 
            href="/post/${data.slug}"
            on-click=${this._navigate}
          >
            <header>
              <figure>
                <img src=${getFeatImage(data._embedded)} alt="">
              </figure>
            </header>
            <article>
              <span class="category">${getCategory(data._embedded)}</span>
              <h4>${unsafeHTML(data.title.rendered)}</h4>
              ${unsafeHTML(data.excerpt.rendered)}
            </article>
          </a>
        </div>
      </div>
    `;

    const markup = html`
      <rock-hero></rock-hero>

      <main class$="wrapper ${optimistic}">
        ${this.posts.map(e => posts(e))}
      </main>
    `;

    render(markup, this);
  }
}

customElements.define('home-page', HomePage);