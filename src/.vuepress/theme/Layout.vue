<template>
  <div class="cover">
    <Content />

    <Header scroll />
    <Cover />
    <main id="main" class="wrapper">
      <div class="block" v-for="post in posts">
        <div class="card">
          <router-link :to="post.path">
            <header>
              <figure>
                <img 
                  :src="post.frontmatter.image" 
                  :alt="post.title"
                >
              </figure>
            </header>
            <article>
              <span class="category">
                {{ post.frontmatter.category }}
              </span>
              <h4>{{ post.title }}</h4>
              <div v-html="post.excerpt"></div>
            </article>
          </router-link>
        </div>
      </div>
    </main>
    <Footer />
    <Credits />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Cover from './components/Cover.vue';
import Footer from './components/Footer.vue';
import Credits from './components/Credits.vue';

export default {
  components: {
    Header,
    Cover,
    Footer,
    Credits,
  },
  computed: {
    posts () {
      return this.$site.pages
        .filter(e => (e.path.search('/blog/') > -1));
    }
  }
}
</script>


<style lang="scss">
@import './styles/main.scss';
</style>