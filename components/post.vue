<template>
	<article id="four" class="post style2" :class="{'alt': right}">
    <div class="image">
      <img :src="post.featured_image || '/images/default.jpg'" alt="" style="display:block" data-position="75% center"/>
    </div>
    <div class="content">
      <div class="inner">
        <header>
          <nuxt-link :to="post.slug">
            <h2 v-html="post.title"></h2>
          </nuxt-link>
          <p class="info">{{ post.date | getFrenchDate }}</p>
        </header>
        <div v-html="post.excerpt"></div>
        <ul class="actions">
          <li><nuxt-link :to="post.slug" class="button alt">Lire l'article</nuxt-link></li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    right: Boolean,
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
