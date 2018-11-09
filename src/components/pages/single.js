import bitquest from 'bitquest';
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { updateMetadata } from 'pwa-helpers/metadata';
import { post as mock } from '../../libs/mock';
import { API, PATHS } from '../../consts';
import { getFeatImage } from '../../libs/data';

const layout = (content, loading) => {
  const optimistic = loading ? 'loading' : '';
  return html`
    <main class=${`content ${optimistic}`}>
      <div class="wrapper">
        <article class="card">
          <figure></figure>
          <section class="">
            <div class="body">
              ${content}
            </div>
          </section>
        </article>
      </div>
    </main>
  `;
}

export class SinglePage extends HTMLElement {
  static get observedAttributes() { return ['location']; }

  attributeChangedCallback(name, oldValue, newValue) {
    const location = JSON.parse(newValue);
    this._init(location);
  }

  _render(data, loading) {
    const content = html`
      <h3>${unsafeHTML(data.title.rendered)}</h3>
      ${unsafeHTML(data.content.rendered)}
    `;

    const markup = layout(content, loading);

    render(markup, this);
    return data;
  }

  _init(location) {
    this._render(mock(), true);
    const slug = location.slug;

    bitquest(API + PATHS.page(slug)).get()
      .then(pages => pages[0])
      .then(data => this._render(data, false))
      .then(data => updateMetadata({
        title: data.title.rendered,
        description: data.excerpt.rendered,
        url: document.location.href,
        image: getFeatImage(data._embedded)
      }));
  }

}


customElements.define('page-single', SinglePage);