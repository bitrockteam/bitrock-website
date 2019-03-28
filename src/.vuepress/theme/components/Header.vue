<template>
  <header class="main active">
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

export default {
  components: {
    BitrockLogo
  },
  computed: {
    items () {
      return this.$themeConfig.nav || []
    }
  }
}
</script>

