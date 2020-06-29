<template>
    <div class="card">
        <router-link :to="post.path" :aria-label="post.title">
        <header style="z-index: 97;position: relative;">
            <figure>
            <img :src="post.frontmatter.image" :alt="post.title" />
            </figure>
        </header>
        <article>
            <h4>{{ post.title }}</h4>
        </article>
        </router-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>


<style lang="scss">
@import './../styles/main.scss';
</style>