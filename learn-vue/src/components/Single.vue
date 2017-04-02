<template>
  <div class="single-photo">
    <Photo v-if="post" :post="post" :comments="comments"></Photo>
    <Comments v-if="post && comments" :comments="comments" :post="post"></Comments>
  </div>
</template>

<script>
  import Photo from './Photo.vue';
  import Comments from './Comments.vue';

  export default {
    name: 'grid',
    components: {Photo, Comments},
    computed: {
        post() {
            return this.$store.getters.postByCode(this.$route.params.id);
        },
        comments() {
            return this.$store.getters.postCommentsByCode(this.$route.params.id);
        }
    }
  }
</script>
