import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { updateMetadata } from 'pwa-helpers/metadata';
import { API, PATHS } from '../../consts';
import { post as mock } from '../../libs/mock';
import { getFeatImage, getCategory, getCategorySlug } from '../../libs/data';

const header = () => html`
  <header>
    <figure>
      <img
        src=${getFeatImage(data._embedded)}
        alt=${data.title.rendered}
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
      <main class$="content wrapper ${getCategorySlug(data._embedded)}">
        <article class$="card ${optimistic}">
          <div class="category">${getCategory(data._embedded)}</div>
          <section class="">
            <div class="body">
              <h3>${unsafeHTML(data.title.rendered)}</h3>
              ${unsafeHTML(data.content.rendered)}
            </div>
            <!-- ${user(data._embedded.author[0])} -->
          </section>
        </article>
      </main>
    `;

    render(markup, this);
    return data;
  }

  connectedCallback() {
    this._render(mock(), true);
    const slug = this.location.params.slug;

    bitquest(API + PATHS.post(slug)).get()
      .then(posts => posts[0])
      .then(data => this._render(data, false))
      .then(data => updateMetadata({
        title: data.title.rendered,
        description: data.excerpt.rendered,
        url: document.location.href,
        image: getFeatImage(data._embedded)
      }));
  }
}

customElements.define('post-single', SinglePost);