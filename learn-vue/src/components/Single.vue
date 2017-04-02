<template>
  <div class="single-photo">
    <Photo v-if="post" :post="post" :comments="comments"></Photo>
    <!--<Comments :comments="comments" :post="post" />-->
  </div>
</template>

<script>
  import Photo from './Photo.vue';

  export default {
    name: 'grid',
    components: {Photo},
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
