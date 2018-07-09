
import { html, render } from 'lit-html/lib/lit-extended';
import { getFeatImage } from '../libs/data';
import { post as mock } from '../libs/mock';

const BG = require("./../assets/img/main_bg.jpg");

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
            <h3>
              <small>what does it take</small> to look beyond?</h3>
            <h4>Business. Technology. Experience. </h4>
            <p>In order to successfully develop and apply innovative technology you need to be able to look beyond the horizon, anticipating
            trends and recognizing the next standards.</p>
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