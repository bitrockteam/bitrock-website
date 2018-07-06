import { html, render } from 'lit-html/lib/lit-extended';
import { LinkElement } from './_shared';

export default class RockLink extends LinkElement {
  _render() {
    const label = this.getAttribute('label');
    const url = this.getAttribute('url');

    const tmpl = html`
      <a
        on-click=${this._navigate}
        data-url$=${url} 
        href$="${url}"
      >${label}</a>
    `;

    render( tmpl, this);
  }
}

customElements.define('rock-link', RockLink);