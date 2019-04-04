<template>
  <section>
    <figure
      :class="classes"
    >
      <img :src="src" :alt="alt">
    </figure>
  </section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    classes () {
      return `wp-block-image align${this.$props.align} is-resized`;
    }
  }
}
</script>
