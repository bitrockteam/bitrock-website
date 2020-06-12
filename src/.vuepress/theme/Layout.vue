<template>
  <div class="cover">
    <Content />

    <Header scroll />
    <Cover />
    <main id="main" class="wrapper">
      <div class="block" v-for="post in posts">
        <div class="card">
          <router-link :to="post.path" :aria-label="post.title">
            <header style="z-index: 97;position: relative;">
              <figure>
                <img :src="post.frontmatter.image" :alt="post.title" />
              </figure>
            </header>
            <article>
              <span class="category">{{ post.frontmatter.category }}</span>
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
import Header from "./components/Header.vue";
import Cover from "./components/Cover.vue";
import Footer from "./components/Footer.vue";
import Credits from "./components/Credits.vue";

const date = post => new Date(post.frontmatter.publish);

export default {
  components: {
    Header,
    Cover,
    Footer,
    Credits
  },
  computed: {
    posts() {
      const cols = 3;
      const posts = this.$site.pages
        .filter(e => e.path.search("/blog/") > -1)
        .sort(
          (a, b) =>
            new Date(b.frontmatter.publish) - new Date(a.frontmatter.publish)
        );

      return posts;
    }
  }
};
</script>


<style lang="scss">
@import "./styles/main.scss";
</style>