import * as types from './types';

export default {
  [types.APPLICATION_INITIALIZED] (state, {posts, comments}) {
    state.posts = posts;
    state.comments = comments;
  },
  [types.INCREMENT_LIKES] (state, {post}) {
    let index = state.posts.findIndex((p) => p.code === post.code);

    if (index !== -1) {
      post.likes++;
      state.posts.splice(index, 1, post);
    }
  }
}
