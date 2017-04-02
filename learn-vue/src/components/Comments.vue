<template>
  <div class="comments">
    <div class="comment" v-for="(comment,index) in comments" :key="index">
      <p>
        <strong>{{ comment.user }}</strong>
        {{ comment.text }}
        <button class="remove-comment">&times;</button>
      </p>
    </div>
    <form class="comment-form" @submit.prevent="submit">
      <input type="text" v-model="newComment.author" placeholder="author"/>
      <input type="text" v-model="newComment.text" placeholder="comment"/>
      <input type="submit" hidden />
    </form>
  </div>
</template>

<script>
import { ADD_COMMENT } from '../store/types';

export default {
    props: ['comments', 'post'],
    data() {
        return {
            newComment: this.reset()
        };
    },
    methods: {
        submit() {
            this.$store.commit({
              type: ADD_COMMENT,
              code: this.post.code,
              newComment: this.newComment
            });

            this.newComment = this.reset();
        },
        reset() {
            return {
              author: '',
              text: ''
            };
        }
    }
}
</script>
