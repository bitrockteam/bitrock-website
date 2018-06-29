import { html, render } from 'lit-html/lib/lit-extended';
import { router } from './../libs/routing';
import { $ } from './../libs/dom';
import {
  renderMenu, renderPosts, renderTags
} from './../libs/render';
import { pagesToRoutes } from './../libs/data';
import bitquest from 'bitquest';

import './header';
import './link';
import './logo';

const API = 'http://54.199.243.153/wp-json/wp/v2/';
const BG = require("./../assets/img/main_bg.jpg");

export default class BitrockWebsite extends HTMLElement {

  connectedCallback() {
    this._render();
    this._loadData();
  }

  _loadData() {
    Promise.all([
      bitquest(API + 'pages').get(),
      bitquest(API + 'tags').get(),
      bitquest(API + 'posts').get()
    ]).then(responses => {
      renderMenu(responses[0]);
      renderTags(responses[1]);
      renderPosts(responses[2]);
      $('body').classList.add('ready');

      const routes = pagesToRoutes(responses[0])
      router.add(routes);
    }, error => {
      // $('body').classList.add('ready');
    });
  }

  _render(){
    const markup = html`
      <div class="wrapper">
        <bitrock-header></bitrock-header>
        
        <section class="cover">
          <figure>
            <img src=${BG} alt="">
            <bitrock-logo></bitrock-logo>
            <figcaption>
              <h3>
                <small>what does it take</small> to look beyond?</h3>
              <h4>Business. Technology. Experience. </h4>
              <p>In order to successfully develop and apply innovative technology you need to be able to look beyond the horizon, anticipating
              trends and recognizing the next standards.</p>
            </figcaption>
          </figure>
        </section>

        <main class="evidence">
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <h4>Nuovi obiettivi e risultati Q1 2018</h4>
              <p>We closed our seventh year in continuos growing, with more than 6 million Euros of revenues and over seventy direct employees.</p>
              <p>
                <a href="">read more</a>
              </p>
            </div>
          </div>
          
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <h4>Our story</h4>
              <p>From DATABIZ to BITROCK under the sign of innovation.</p>
              <p>
                <a href="">read more</a>
              </p>
            </div>
          </div>
        </main>
        <main> 
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <h4>Nuovi obiettivi e risultati Q1 2018</h4>
              <p>We closed our seventh year in continuos growing, with more than 6 million Euros of revenues and over seventy direct employees.</p>
              <p>
                <a href="">read more</a>
              </p>
            </div>
          </div>
          
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <h4>Our story</h4>
              <p>From DATABIZ to BITROCK under the sign of innovation.</p>
              <p>
                <a href="">read more</a>
              </p>
            </div>
          </div>
          
          <div class="block">
            <div class="card inverted">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <h4>Our mission</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
              <p>
                <a href="">read more</a>
              </p>
            </div>
          </div>
          
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
            </div>
          </div>
          
          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
            </div>
          </div>

          <div class="block">
            <div class="card">
              <figure>
                <img src=${BG} alt="">
              </figure>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium illo, similique tenetur totam rerum optio
                repudiandae est ipsa quaerat quis eligendi doloribus veniam molestias eum? Consequatur ipsa expedita saepe.</p>
            </div>
          </div>
          
          <!-- <i class="fas fa-circle-notch fa-spin"></i> -->
        </main>

        <footer>
          <p>Copyright 2018 Databiz Group s.r.l. - Partita IVA/C.F.: 04268680263</p>
        </footer>
      </div>
    `;

    render(markup, this);
  }
}

customElements.define('bitrock-website', BitrockWebsite);