
import { html, render } from 'lit-html/lib/lit-extended';
import './logo';
import './link';

export default class BitrockHeader extends HTMLElement {
  static get observedAttributes() { 
    return ['menu', 'tags', 'active']; 
  }

  _setId(evt){
    console.log(evt);
  }

  _render(menu = [], tags = [], active = false) {
    const _active = active ? 'active' : '';

    const markup = html`
      <header class$="main ${_active}">
        <div class="wrapper">
          <div class="logo">
            <bitrock-logo></bitrock-logo>
          </div>
        
          <nav>
            <ul>
              ${menu.map(e => 
                html`<li><rock-link
                  label$=${e.title}
                  url$=${e.url}
                  type$=${e.type}
                ></rock-link></li>`)}
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
      case 'tags':
        this[name] = JSON.parse(newValue) || [];
        break;
    }

    this._render(this.menu, this.tags, this.active);
  }

  connectedCallback(){
    this._render();
    this._mobileNav();
  }
}

customElements.define('bitrock-header', BitrockHeader);