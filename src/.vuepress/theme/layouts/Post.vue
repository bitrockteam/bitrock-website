<template>
  <div class="cover">
    <Header />
    
     <main class="content wrapper">
      <article class="card">
        <div class="category">{{ category }}</div>
        <section class="">
          <div class="body">
            <h3>{{ title }}</h3>
            <Content />
          </div>
          <!-- ${user(data._embedded.author[0])} -->
        </section>
      </article>
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
    category () { return this.$frontmatter.category },
    title () { return this.$frontmatter.title },
  }
}
</script>


<style lang="scss">
@import './../styles/main.scss';
</style>s