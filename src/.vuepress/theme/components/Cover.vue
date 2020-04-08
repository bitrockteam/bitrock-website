<template>
  <section class="cover">
    <div class="cover__description">
      <h3 class="cover__tagline">{{ tagline }}</h3>
      <h2 class="cover__claim">{{ claim }}</h2>
      <p class="cover__text"><b>Bitrock</b> is a <b>high-end consulting and system integration company</b>, committed to offering cutting-edge and innovative solutions in <b>Microservices</b>, <b>Reactive Platforms</b>, <b>Data Analytics</b>, <b>DevOps</b> and <b>UX</b>.</p>
      <a class="btn btn-1" :href="ctaLink">{{ ctaText }}</a>
    </div>
    <video class="cover__video" autoplay muted loop>
      <source src="videos/business.mp4" type="video/mp4">
    </video>
  </section>
  <!-- 
    <section class="cover">
    <figure style="background-image: url(/img/main_bg.jpg)">
      <figcaption class="wrapper">
        <div class="claim">
          <h3>{{ tagline }}</h3>
          <h2>{{ claim }}</h2>
          <p><b>Bitrock</b> is a <b>high-end consulting and system integration company</b>, committed to offering cutting-edge and innovative solutions in <b>Microservices</b>, <b>Reactive Platforms</b>, <b>Data Analytics</b>, <b>DevOps</b> and <b>UX</b>.</p>
        </div>
        <a class="btn btn-1" :href="ctaLink">{{ ctaText }}</a>
      </figcaption>
    </figure>
  </section>
  -->
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

