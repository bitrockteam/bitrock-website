import { router } from './../../libs/routing';

export class LinkElement extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'url', 'active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  connectedCallback() {
    this._render();
  }

  _navigate(evt) {
    evt.preventDefault();
    const href = evt.target.dataset.url;
    router.navigate(href);
  }

}