
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { getFeatImage } from '../libs/data';
import { post as mock } from '../libs/mock';
import staticImg from './../assets/img/main_bg.jpg';

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
        <figure style$="background-image: url(${staticImg})">
          
          <figcaption class="wrapper">
            <h3><small>what does it take</small> to look beyond?</h3>
            <h4>Business. Technology. Experience.</h4>

            <p>In order to successfully develop and apply innovative technology you need to be able to look
beyond the horizon, anticipating trends and recognizing the next standards.</p>

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