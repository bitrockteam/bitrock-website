<template>
  <footer class="credits">
    <div class="wrapper">
      <article>
        <figure>
          <img src="/logos/DatabizLogo.white.svg" alt="Databiz Group">
        </figure>
      
        <p>Copyright <span class="year">{{ year }}</span> 
          {{ text }}</p>
      </article>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    text: ''
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
