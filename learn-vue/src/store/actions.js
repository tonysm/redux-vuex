import * as types from './types';

export default {
  [types.INIT_APPLICATION] ({commit}) {
    const posts = require('./data/posts').default;
    const comments = require('./data/comments').default;

    commit({
      type: types.APPLICATION_INITIALIZED,
      posts,
      comments
    });
  }
}
