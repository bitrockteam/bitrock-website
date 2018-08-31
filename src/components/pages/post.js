import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { router } from '../../libs/routing';
import { API, PATHS } from '../../consts';
import { post as mock } from '../../libs/mock';
import { getFeatImage, getCategory } from '../../libs/data';
import '../ui/link';
import '../ui/back';

const header = () => html`
  <header>
    <figure>
      <img
        src="${getFeatImage(data._embedded)}"
        alt="${data.title.rendered}" 
      >
    </figure>
  </header>
`;

const user = data => html`
  <div class="meta">
    <img src=${data.avatar_urls['96']}
      alt=${data.name}>
    <h6>${data.name}</h6>
    <p>${data.description}</p>
  </div>
`;

export default class SinglePost extends HTMLElement {
  _render(data, loading) {
    const optimistic = loading ? 'loading' : '';

    const markup = html`
      <main class="content wrapper">
        <article class$="card ${optimistic}">
          <div class="category">${getCategory(data._embedded)}</div>
          <section class="">
            <div class="body">
              <h3>${unsafeHTML(data.title.rendered)}</h3>
              ${unsafeHTML(data.content.rendered)}
            </div>
            ${user(data._embedded.author[0])}
          </section>
        </article>
        <!-- <rock-back
          label="Home"
          url="home-page"
        > -->
      </main>
    `;

    render(markup, this);
  }

  connectedCallback() {
    this._render(mock(), true);

    const id = this.getAttribute('id');

    bitquest(API + PATHS.post(id)).get()
      .then(data => this._render(data, false));
  }
}

customElements.define('post-single', SinglePost);