<template>
  <div class="cover">
    <Content />

    <Header scroll />
    <Cover />
    <main id="main">
      <div class="wrapper grid">
        <div class="block" v-for="post in posts">
          <Post :post=post></Post>
        </div>
      </div>
      <router-link to="/blog" class="button-more">
        Read More
      </router-link>
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
import Post from "./components/Post.vue";

const date = post => new Date(post.frontmatter.publish);

export default {
  components: {
    Header,
    Cover,
    Footer,
    Credits,
    Post
  },
  computed: {
    posts() {
      const posts = this.$site.pages
        .filter(e => e.path.search("/blog/") > -1)
        .sort(
          (a, b) =>
            new Date(b.frontmatter.publish) - new Date(a.frontmatter.publish)
        )
        .slice(0, 6);

      return posts;
    }
  }
};
</script>


<style lang="scss">
@import "./styles/main.scss";
</style>