<template>
  <div>
    <banner/>
    <post v-for="(post, i) in posts" :key="i" :right="i % 2 === 0" :post="post"/>
  </div>
</template>

<script>
import banner from '@/components/banner.vue'
import post from '@/components/post.vue'

export default {
  async asyncData ({ app, error }) {
    try {
      let { posts } = await app.$axios.$get('/posts')
      return { posts }
    } catch (e) {
      return error({ statusCode: 404 })
    }
  },
  components: {
    banner,
    post
  }
}
</script>

<style>
</style>
