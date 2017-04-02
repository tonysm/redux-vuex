<template>
  <div class="photo-grid">
    <Photo v-for="post in posts" :post="post" :key="post.code" :comments="comments[post.code] || []"></Photo>
  </div>
</template>

<script>
import Photo from './Photo.vue';

export default {
  name: 'grid',
  components: {Photo},
  computed: {
      posts() {
          return this.$store.state.posts;
      },
      comments() {
          return this.$store.state.comments;
      }
  }
}
</script>
