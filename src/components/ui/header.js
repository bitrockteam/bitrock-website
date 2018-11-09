
import { html, render } from 'lit-html';
import './logo';

const page = data => html`
  <li><a
    href="/${data.url}"
  >${data.title}</a></li>
`;

const link = data => html`
  <li><a
    href=${data.url}
    target="_blank"
    rel="noopener"
  >${data.title}</a></li>
`;

export default class BitrockHeader extends HTMLElement {
  static get observedAttributes() { 
    return ['menu', 'active']; 
  }

  _render(menu = [], active = false) {
    const _active = active ? 'active' : '';

    const markup = html`
      <header class="main ${_active}">
        <div class="wrapper">
          <div class="logo">
            <a href="/">
              <bitrock-logo></bitrock-logo>
            </a>
          </div>
        
          <nav>
            <ul>
              ${menu.map(e => 
                e.type === 'custom' ? link(e) : page(e)
              )}
            </ul>
          </nav>

          <button class="hamburger hamburger--spin" 
            type="button"
            aria-label="mobile-menu">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
          </button>
        </div>
      </header>
    `;

    render(markup, this);
  }

  _mobileNav(){
    const nav = this.querySelector('header');
    const ham = this.querySelector('.hamburger');

    ham.addEventListener('click', evt => {
      evt.stopPropagation();

      nav.classList.toggle('open');
      ham.classList.toggle('is-active');
    });

    nav.addEventListener('click', evt => {
      nav.classList.remove('open');
      ham.classList.remove('is-active');
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(name, newValue);
    switch(name){
      case 'active':
        this.active = newValue === 'true';
        break;
      case 'menu':
        this[name] = JSON.parse(newValue) || [];
        break;
    }

    this._render(this.menu, this.active);
  }

  connectedCallback(){
    this._render();
    this._mobileNav();
  }
}

customElements.define('bitrock-header', BitrockHeader);