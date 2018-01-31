import Vue from 'vue'

Vue.filter('getFrenchDate', function (value, options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) {
  return new Date(value).toLocaleDateString('fr-FR', options)
})
