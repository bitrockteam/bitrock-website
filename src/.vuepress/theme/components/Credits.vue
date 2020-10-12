<template>
  <footer class="credits">
    <div class="wrapper">
      <article>
        <p><b>Bitrock</b> &copy;Copyright <span class="year">{{ year }}</span>. All rights reserved. P.IVA 10150530961</p>
      </article>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
