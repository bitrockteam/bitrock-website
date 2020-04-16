<template>
  <section class="cover">
    <div class="cover__description">
      <h3 class="cover__tagline">{{ tagline }}</h3>
      <h2 class="cover__claim">{{ claim }}</h2>
      <p class="cover__text">
        Bitrock is a high-end technology<br/>
        and consulting firm, committed to offering cutting-edge<br/>
        and innovative solutions in DevOps,<br/>
        Custom Software Engineering and Data&amp;Analytics.</p>
      <a class="cover__button" :href="ctaLink">{{ ctaText }}</a>
    </div>
    <video class="cover__video" autoplay muted loop>
      <source src="videos/business.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script>
export default {
  computed: {
    claim () { return this.$frontmatter.claim },
    tagline () { return this.$frontmatter.tagline },
    ctaText () { return this.$frontmatter.ctaText },
    ctaLink () { return this.$frontmatter.ctaLink },
  }
}
</script>

