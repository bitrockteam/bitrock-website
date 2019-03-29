<template>
  <div class="cover">
    <Header />
    <main class="content">
      <div class="wrapper">
        <article class="card">
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
  }
}
</script>


<style lang="scss">
@import './../styles/main.scss';
</style>s