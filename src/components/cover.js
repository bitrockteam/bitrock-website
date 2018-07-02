
import { html, render } from 'lit-html/lib/lit-extended';

const BG = require("./../assets/img/main_bg.jpg");

export default class RockHero extends HTMLElement {
  connectedCallback() {
    const markup = html`
      <section class="cover">
        <figure>
          <img src=${BG} alt="">
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
}

customElements.define('rock-hero', RockHero);