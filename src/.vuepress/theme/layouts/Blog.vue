<template>
  <div class="cover">
    <Header />
    <main id="main" class="wrapper">
      <h1 class="blog__title">Bitrock Blog</h1>
      <p class="blog__subtitle">All Insights regarding our cutting-edge technology, events and our corporate culture</p>
      <h2 class="category__title">Technology</h2>
        <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="post in technologyPosts">
            <Post :post=post></Post>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <h2 class="category__title">Events</h2>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="post in eventsPosts">
                <Post :post=post></Post>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      <h2 class="category__title">Bitrock Life</h2>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="post in bitrockLifePosts">
                <Post :post=post></Post>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </main>
    <Footer />
    <Credits />
  </div>
</template>

<script>
import Header from './../components/Header.vue';
import Footer from './../components/Footer.vue';
import Credits from './../components/Credits.vue';
import Post from './../components/Post.vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Header,
    Footer,
    Credits,
    Post,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
        swiperOption: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            } 
        },
    }
  },
  methods: {
    getPostsByCategory(category) {
      const posts = this.$site.pages
        .filter(e => e.path.search("/blog/") > -1)
        .filter(post => post.frontmatter.category === category)
        .sort(
          (a, b) =>
            new Date(b.frontmatter.publish) - new Date(a.frontmatter.publish)
        )
      return posts;
    }
  },
  computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    technologyPosts() {
      return this.getPostsByCategory("TECHNOLOGY");
    },
    eventsPosts() {
      return this.getPostsByCategory("EVENTS");
    },
    bitrockLifePosts() {
      return this.getPostsByCategory("BITROCK LIFE");
    }
  }
}
</script>

<style lang="scss">
@import './../styles/main.scss';

.swiper {
  .swiper-slide {
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: $white;
  }

  .swiper-button-prev, .swiper-button-next {
      color: $white;
  }

  .swiper-pagination {
    position: static;
    margin-top: 1rem;
  }

  .swiper-pagination-bullet-active {
    background-color: $basic01 !important;
  }
}
</style>