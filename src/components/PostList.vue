<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<script>
import { RepositoryFactory } from '../repositories/RepositoryFactory';

const PostsRepository = RepositoryFactory.get('posts');

export default {
  name: 'PostList',
  data() {
    return {
      isLoading: false,
      posts: [],
      params: {
        _start: 0,
        _limit: 10,
      },
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const { data } = await PostsRepository.getPosts(this.params);
        this.posts = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
