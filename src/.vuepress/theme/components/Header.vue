<template>
  <header class="main active" ref="header">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/" aria-label="Bitrock logo">
          <BitrockLogo :mode="colorMode" />
        </router-link>
      </div>
    
      <nav>
        <ul>
          <li v-for="item in items">
            <a 
              v-if="item.external"
              :href="item.link"
              rel="noopener"
              target="_blank"
              :aria-label="item.text"
              :class="'text-' + colorMode"
            >{{ item.text }}</a>
            <router-link
              v-else
              :to="item.link"
              :key="item.link"
              :aria-label="item.text"
              :exact="item.link === '/'"
              :class="'text-' + colorMode"
              >{{ item.text }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="hamburger hamburger--spin"
        ref="ham" 
        @click="open"
        type="button"
        aria-label="mobile-menu">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
      </button>
    </div>
  </header>
</template>

<script>
import BitrockLogo from './BitrockLogo.vue';

export const $ = selector => document.querySelector(selector);

export default {
  data() {
    return {
      colorMode: '',
    }
  },
  components: {
    BitrockLogo
  },
  computed: {
    items () {
      return this.$themeConfig.nav || []
    }
  },
  mounted() {
    if (typeof this.$attrs.scroll === 'string') {
      window.addEventListener('scroll', this.scrollEffect);
      this.$refs.header.classList.remove('active');
    } else {
      window.removeEventListener('scroll', this.scrollEffect);
      this.$refs.header.classList.add('active');
    }
    if(this.$route.path == "/" || this.$route.path == "/home" ) {
      this.colorMode = 'dark';
    } else {
      this.colorMode = 'light';
    }
  },
  methods: {
    scrollEffect(evt) {
      const cover = $('section.cover');
      const coverHeight = cover ? cover.clientHeight : 0;
      const condition = window.scrollY > coverHeight;
      const header = this.$refs.header;
      // condition ? header.classList.add('active') :
      //   header.classList.remove('active');
      if (condition) {
        cover && header ? header.classList.add('active') : null;
        this.colorMode = 'light';
      } else {
        cover && header ? header.classList.remove('active') : null;
        this.colorMode = 'dark';
      }
    },
    open(evt) {
      evt.stopPropagation();
      this.colorMode = 'light';
      this.$refs.header.classList.toggle('open');
      this.$refs.ham.classList.toggle('is-active');
      if(this.$refs.header.classList.contains('open'))
        window.removeEventListener('scroll', this.scrollEffect);
      else {
        this.colorMode = 'dark';
        window.addEventListener('scroll', this.scrollEffect);
      }
        
    }
  }
}
</script>

