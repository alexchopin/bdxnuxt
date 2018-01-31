<template>
  <section id="main">
    <nuxt-link to="/" class="CloseButton">X</nuxt-link>
    <div class="inner">
      <div class="image fit">
        <img :src="post.featured_image || '/images/default.jpg'" alt="" />
      </div>
      <header>
        <h1>{{ post.title }}</h1>
        <p class="info">{{ post.date | getFrenchDate }}</p>
      </header>
      <div v-html="post.content"></div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ app, params, error }) {
    try {
      let post = await app.$axios.$get(`/posts/slug:${params.slug}`)
      return { post }
    } catch (e) {
      return error({ statusCode: 404 })
    }
  }
}
</script>

<style lang="scss">
.CloseButton {
  top: 0;
  right: 0;
  position: fixed;
  background-color: #3498db;
  color: #fff;
  width: 64px;
  height: 64px;
  line-height: 64px;
  font-size: 32px;
  text-align: center;
  &:hover {
    text-decoration: none;
    background-color: darken(#3498db, 5%);
  }
}
</style>
