
import { html, render } from 'lit-html';
import './logo';

const MENU = [
  { url: '', title: 'cosa facciamo'},
  { url: '', title: 'academy'},
  { url: '', title: 'progetti'},
  { url: '', title: 'scopri bitrock'},
  { url: '', title: 'blog'},
  { url: '', title: 'lavora con noi'},
  { url: '', title: 'contatti'},
];

const TAGS = [
  { url: '', title: 'projects' },
  { url: '', title: 'scala' },
  { url: '', title: 'akka' },
];

export default class BitrockHeader extends HTMLElement {
  static get observedAttributes() { 
    return ['menu', 'tags', 'active']; 
  }

  constructor(){
    super();

    this.menu = MENU;
    this.tags = TAGS;
    this.active = false;
  }

  _render(menu = [], tags = [], active = false) {
    const _active = active ? 'active' : '';

    const markup = html`
      <header class="${_active}">
        <div class="logo">
          <bitrock-logo></bitrock-logo>
        </div>
      
        <i class="fas fa-bars"></i>
      
        <nav>
          <div class="logo">
            <bitrock-logo></bitrock-logo>
          </div>
          <ul>
            ${menu.map(e => 
              html`<li><a href="${e.url}">${e.title}</a></li>`)}
          </ul>
          <hr>
          <ul class="tags">
            ${tags.map(e =>
              html`<li><a href="${e.url}">#${e.title}</a></li>`)}
          </ul>
        </nav>
      </header>
    `;

    render(markup, this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(name, newValue);
    switch(name){
      case 'active':
        this.active = newValue === 'true';
    }

    this._render(this.menu, this.tags, this.active);
  }

  connectedCallback(){
    this._render(this.menu, this.tags, this.active);
  }
}

customElements.define('bitrock-header', BitrockHeader);