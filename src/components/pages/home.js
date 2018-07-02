
import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { unsafeHTML } from 'lit-html/lib/unsafe-html';
import { setPosts } from './../../libs/dom';
import { API } from './../../consts';
import './../cover';

const BG = require("./../../assets/img/main_bg.jpg");

const posts = data => html`
  <div class="block">
    <div class="card">
      <figure>
        <img src=${BG} alt="">
      </figure>
      <h4>${data.title.rendered}</h4>
      ${unsafeHTML(data.excerpt.rendered)}
      <p>
        <a data-id$="${data.id}" href="/post/${data.slug}">read more</a>
      </p>
    </div>
  </div>
`;

export default class HomePage extends HTMLElement {
  static get observedAttributes() {
    return ['posts'];
  }

  constructor(){
    super();
    this.posts = [];
    this.latest = [];
    this.older = [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.latest = this.posts.filter((e,i) => i < 2);
    this.older = this.posts.filter((e,i) => i >= 2);
    console.log(this.latest, this.older);
    this._render();
  }

  connectedCallback(){
    this._render();
    bitquest(API + 'posts').get()
      .then(data => setPosts(data));
  }

  _render() {
    const markup = html`
      <rock-hero></rock-hero>

      <main class="evidence">
        ${this.latest.map(e => posts(e))}
      </main>

      <main>
        ${this.older.map(e => posts(e))}
        <!-- <i class="fas fa-circle-notch fa-spin"></i> -->
      </main>
    `;

    render(markup, this);
  }
}

customElements.define('home-page', HomePage);