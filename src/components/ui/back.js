import { html, render } from 'lit-html/lib/lit-extended';
import { LinkElement } from './_shared';

export default class RockBack extends LinkElement {
  _render() {
    const label = this.getAttribute('label');
    const url = this.getAttribute('url');

    const tmpl = html`
      <a
        on-click=${this._navigate}
        data-url$=${url} 
        href$=${url}
      ><i class="fas fa-chevron-left"></i> ${label}</a>
    `;

    render(tmpl, this);
  }
}

customElements.define('rock-back', RockBack);