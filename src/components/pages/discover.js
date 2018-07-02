import { html, render } from 'lit-html/lib/lit-extended';

export default class Discover extends HTMLElement { 
  connectedCallback() {
    const markup = html`
      <main class="content">
        <article class="card">
          <figure></figure>
          <section class="">
            <div class="meta"></div>
            <div class="body">
              <h3>Scopri Bitrock</h3>
            </div>
          </section>
        </article>
      </main>
    `;

    render(markup, this);
  }
}

customElements.define('scopri-bitrock', Discover);