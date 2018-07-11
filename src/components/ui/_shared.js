import { router } from './../../libs/routing';

export class LinkElement extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'url', 'active', 'type'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  connectedCallback() {
    this._render();
  }

  _navigate(evt) {
    const custom = evt.target.type === 'custom';

    if(!custom) {
      evt.preventDefault();
      const href = evt.target.dataset.url;
      router.navigate(href);
    }
  }

}