
import { html, render } from 'lit-html';
// import { unsafeHTML } from 'lit-html/lib/unsafe-html';
// import { getFeatImage } from './../../libs/data';
import { post as mock } from './../../libs/mock';
import staticImg from './../../assets/img/main_bg.jpg';

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
      <section class="cover ${optimistic}">
        <figure style="background-image: url(${staticImg})">
          <figcaption class="wrapper">
            <div class="claim">
              <h3>what does it take</h3>
              <h2>to look beyond?</h2>
              <p><b>Bitrock</b> is a <b>high-end consulting and system integration company</b>, committed to offering cutting-edge and innovative solutions in <b>Microservices</b>, <b>Reactive Platforms</b>, <b>Data Analytics</b>, <b>DevOps</b> and <b>UX</b>.</p>
            </div>
            <a class="btn btn-1" href="#main">Discover</a>
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