
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { getFeatImage } from '../libs/data';
import { post as mock } from '../libs/mock';


export default class RockHero extends HTMLElement {

  static get observedAttributes() {
    return ['data'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render(this.data, false);
  }

  _render(data, loading) {
    const optimistic = loading ? 'loading' : '';

    const markup = html`
      <section class$="cover ${optimistic}">
        <figure>
          <img src=${getFeatImage(data._embedded)} 
            alt=""
          >
          <bitrock-logo></bitrock-logo>
          <figcaption>
            <h3>${unsafeHTML(data.title.rendered)}</h3>

          </figcaption>
        </figure>
      </section>
    `;

    render(markup, this);
  }

  connectedCallback() {
    this._render(mock(), true);
  }
}

customElements.define('rock-hero', RockHero);