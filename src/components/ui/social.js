import { html, render } from 'lit-html/lib/lit-extended';

const DATA = [
  // { name: 'Facebook', icon: 'fa-facebook-f', url: '' },
  { name: 'Twitter', icon: 'fa-twitter', url: 'https://www.twitter.com/BitrockIT' },
  { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/company/bitrock-srl/' }
]

export default class RockSocialIcons extends HTMLElement {
  _render(socials = []) {
    const markup = html`
      <ul class="rock socials">
        ${socials.map(e => html`
          <li>
            <a 
              href="${e.url}" 
              target="_blank" 
              title="${e.name}"
              rel="noopener"
            >
              <i class$="fab ${e.icon}"></i>
            </a>
          </li>
        `)}
      </ul>
    `;

    render( markup, this);
  }

  connectedCallback() {
    this._render(DATA);
  }
}

customElements.define('rock-social-icons', RockSocialIcons);