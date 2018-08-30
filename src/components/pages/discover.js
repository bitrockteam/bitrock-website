
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { layout, BitrockPage } from './_shared';

export default class Discover extends BitrockPage {
  _render(data, loading){
    const content = html`
      <h3>${unsafeHTML(data.title.rendered)}</h3>
      ${unsafeHTML(data.content.rendered)}
    `;

    const markup = layout(content, loading);

    render(markup, this);
  }

}

customElements.define('discover-us', Discover);