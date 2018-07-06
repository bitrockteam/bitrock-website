import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { router } from '../../libs/routing';
import { API } from '../../consts';
import { post as mock } from '../../libs/mock';
import { getFeatImage } from '../../libs/data';
import '../ui/link';
import '../ui/back';

export default class SinglePost extends HTMLElement {
  _render(data, loading) {
    const optimistic = loading ? 'loading' : '';

    const markup = html`
      <main class="content">
        <rock-back
          label="Home"
          url="home-page"
        >
        </rock-back>
        <article class$="card ${optimistic}">
          <figure>
            <img 
              src="${getFeatImage(data._embedded)}"
              alt="${data.title.rendered}" 
            >
          </figure>
          <section class="">
            <div class="meta"></div>
            <div class="body">
              <h3>${data.title.rendered}</h3>
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

    bitquest(`${API}posts/${id}/?_embed`).get()
      .then(data => this._render(data, false));
  }
}

customElements.define('post-single', SinglePost);