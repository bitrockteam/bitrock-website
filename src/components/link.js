import { html, render } from 'lit-html/lib/lit-extended';
import { router } from './../libs/routing';

export default class RockLink extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'url', 'active'];
  }

  _navigate(evt) {
    evt.preventDefault();
    const href = evt.target.dataset.url;
    router.navigate(href);
  }

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

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  connectedCallback(){
    this._render();
  }
}

customElements.define('rock-link', RockLink);