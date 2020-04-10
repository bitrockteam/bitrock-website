<template>
  <div class="cover">
    <Header />
    <main class="content">
      <div class="wrapper">
        <article class="card" :class="pageClasses">
          <figure></figure>
          <section class="">
            <div class="body">
              <Content />
            </div>
          </section>
        </article>
      </div>
    </main>
    <Footer />
    <Credits />
  </div>
</template>

<script>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';
import Credits from './../components/Credits.vue';

export default {
  components: {
    Header,
    Footer,
    Credits,
  },
  computed: {
    pageClasses() {
        const userPageClass = this.$page.frontmatter.pageClass;
        return [
            userPageClass
        ];
    }
  }
}
</script>


<style lang="scss">
@import './../styles/main.scss';
</style>s