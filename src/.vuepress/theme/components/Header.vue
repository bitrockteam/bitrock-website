<template>
  <header class="main active" ref="header">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <BitrockLogo />
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
            >{{ item.text }}</a>
            <router-link
              v-else
              :to="item.link"
              :key="item.link"
              :exact="item.link === '/'">
              {{ item.text }}
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
    }
  },
  methods: {
    scrollEffect(evt) {
      const cover = $('section.cover');
      const coverHeight = cover ? cover.clientHeight : 0;
      const condition = window.scrollY > coverHeight;
      const header = this.$refs.header;
      condition ? header.classList.add('active') :
        header.classList.remove('active');
    },
    open(evt) {
      evt.stopPropagation();

      this.$refs.header.classList.toggle('open');
      this.$refs.ham.classList.toggle('is-active');
    }
  }
}
</script>

