<template>
  <div class="cover">
    <Content />

    <Header />
    <Cover />
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
  }
}
</script>


<style lang="scss">
@import './styles/main.scss';
</style>
