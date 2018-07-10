import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { router } from '../../libs/routing';
import { API } from '../../consts';
import { post as mock } from '../../libs/mock';
import { getFeatImage } from '../../libs/data';
import '../ui/link';
import '../ui/back';

export default class ContactUs extends HTMLElement {
  _render(){
    const markup = html`
      <main class="content">
        <article class="card">
          <figure></figure>
          <section class="">
            <div class="meta"></div>
            <div class="body">
              <h3>Contact us</h3>
              <p></p>
            </div>
          </section>
        </article>
      </main>
    `;

    render(markup, this);
  }

  connectedCallback(){
    this._render();
  }

}

customElements.define('contact-us', ContactUs);