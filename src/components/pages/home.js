import bitquest from 'bitquest';
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { updateMetadata } from 'pwa-helpers/metadata';
import { getFeatImage, getCategory } from '../../libs/data';
import { post as mock } from '../../libs/mock';
import { API, PATHS } from '../../consts';
import ogImg from './../../assets/social.png';
import pkg from './../../../package.json';
import './../ui/cover';

export default class HomePage extends HTMLElement {

  constructor(){
    super();

    this.page = 1;
    this.more = true;
    this.posts = Array.from(Array(12), x => mock());
  }

  connectedCallback() {
    this._render(true);
    bitquest(API + PATHS.posts()).get()
      .then(data => this.posts = data)
      .then(posts => this._render(false))

    updateMetadata({
      title: pkg.displayName,
      description: pkg.description,
      url: document.location.href,
      image: '/' + ogImg
    });
  }

  _navigate(evt) {
    evt.preventDefault();
    const t = evt.currentTarget;
    const id = t.dataset.id;
    const slug = t.dataset.slug;
    router.navigate('post.single', { id, slug });
  }

  _endPagination() {
    this.more = false;
    return this.posts;
  }

  _loadMore() {
    this.page++;

    bitquest(API + PATHS.posts(this.page)).get()
      .then(
        data => this.posts.concat(data),
        err => this._endPagination()
      )
      .then(more => this.posts = more)
      .then(posts => this._render(false));
  }

  _render(loading) {
    const optimistic = loading ? 'loading' : '';

    const posts = data => html`
      <div class="block">
        <div class="card">
          <a
            data-id=${data.id}
            data-slug=${data.slug} 
            href="/post/${data.slug}"
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

      <main id="main" class="wrapper ${optimistic}">
        ${this.posts.map(e => posts(e))}
      </main>

      ${this.more ?
        html`
          <div class="load-more">
            <button class="btn btn-1" @click=${e => this._loadMore()}>
              Load more
            </button>
          </div>
          ` : ''}
    `;

    render(markup, this);
  }
}

customElements.define('home-page', HomePage);