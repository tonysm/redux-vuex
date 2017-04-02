<template>
  <figure class="grid-figure" v-if="post">
    <div class="grid-photo-wrap">
      <router-link :to="`/posts/${post.code}`" tag="a">
        <img :src="post.display_src" :alt="post.caption" class="grid-photo" />
      </router-link>

      <transition name="like" v-for="l in showLikes" :key="l.like" appear>
        <span class="likes-heart" v-show="l.show">
          {{ l.like }}
        </span>
      </transition>
    </div>

    <figcaption>
      <p>{{ post.caption }}</p>
      <div class="control-buttons">
        <a @click.prevent="incrementLikes" class="button likes">&hearts; {{ likes }}</a>
        <router-link :to="`/posts/${post.code}`" tag="a" class="button">
          <span class="comment-count">
            <span class="speech-bubble"></span>
            {{ comments.length }}
          </span>
        </router-link>
      </div>
    </figcaption>

  </figure>
</template>

<script>
  import Vue from 'vue';
  import {INCREMENT_LIKES} from '../store/types';

  export default {
      props: ['post', 'comments'],
      data() {
          return {
              showLikes: [],
          };
      },
      computed: {
          likes() {
              if (!this.post) return 0;

              return this.post.likes;
          }
      },
      watch: {
          likes(newVal, oldVal) {
              if (oldVal === 0 || newVal === oldVal) return;

              this.showLikes.push({
                  like: newVal,
                  show: true
              });

              setTimeout(() => {
                  let index = this.showLikes.findIndex((like) => like.like === newVal);

                  this.showLikes.splice(index, 1, {
                      show: false,
                      like: newVal
                  });
              }, 200);

              setTimeout(() => {
                  let index = this.showLikes.findIndex((like) => like.like === newVal);

                  this.showLikes.splice(index, 1);
              }, 5000);
          }
      },
      methods: {
          incrementLikes() {
              this.$store.commit({
                  type: INCREMENT_LIKES,
                  post: this.post
              });
          }
      }
  }
</script>
