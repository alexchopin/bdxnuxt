<template>
  <div class="ErrorPage">
    <h1>Page introuvable</h1>
    <nuxt-link to="/" class="button alt">Retour à l'accueil</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
.ErrorPage {
  padding: 100px 0;
  text-align: center;
  h1 {
    font-weight: 400;
  }
}
</style>

