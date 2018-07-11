import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { router } from '../../libs/routing';
import { API, PATHS } from '../../consts';
import { post as mock } from '../../libs/mock';
import { getFeatImage } from '../../libs/data';
import '../ui/link';
import '../ui/back';

export default class SinglePost extends HTMLElement {
  _render(data, loading) {
    const optimistic = loading ? 'loading' : '';

    const markup = html`
      <main class="content">
        </rock-back>
        <article class$="card ${optimistic}">
          <header>
            <figure>
              <img
                src="${getFeatImage(data._embedded)}"
                alt="${data.title.rendered}" 
              >
            </figure>
          </header>
          <section class="">
            <div class="meta"></div>
            <div class="body">
              <h3>${unsafeHTML(data.title.rendered)}</h3>
              ${unsafeHTML(data.content.rendered)}
            </div>
          </section>
        </article>
        <rock-back
          label="Home"
          url="home-page"
        >
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