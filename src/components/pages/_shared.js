import bitquest from 'bitquest';
import { html, render } from 'lit-html/lib/lit-extended';
import { store } from './../../libs/storage';
import { post as mock } from '../../libs/mock';
import { API, PATHS } from '../../consts';
// import { getFeatImage } from '../../libs/data';

export const layout = (content, loading) => {
  const optimistic = loading ? 'loading' : '';
  return html`
    <main class$="content ${optimistic}">
      <div class="wrapper">
        <article class="card">
          <figure></figure>
          <section class="">
            <div class="body">
              ${content}
            </div>
          </section>
        </article>
      </div>
    </main>
  `;
} 


export const getPageId = () => {
  const slug = window.location.hash.replace('#/', '');
  const pages = store.get('pages') || [];
  const result = pages.filter(e => e.url === slug);
  return result.length ? result[0].id : 0;
}

export class BitrockPage extends HTMLElement {
  connectedCallback() {
    this._render(mock(), true);
    const id = getPageId();

    bitquest(API + PATHS.page(id)).get()
      .then(data => this._render(data, false));
  }

}