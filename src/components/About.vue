<template>
  <div class="about">
  <v-container fill-height>
   <v-layout row wrap align-center>
    <v-flex xs12 class="text-xs-center">
        <h1>About</h1>
        <p>A simple application to search Github's user basic information using Github API.</p>
        <p>
            Created with help of <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a> using
             <a href="https://vuetifyjs.com/en/getting-started/quick-start" target="_blank">vuetifyjs/pwa</a>'s
             boilerplate. Source code will be available on my
             <a href="https://github.com/rakhaviantoni/rv-github-searcher" target="_blank">Github</a>.
        </p>
    </v-flex>
   </v-layout>
  </v-container>
 </div>
</template>

<script>
export default {
    name: 'About'
}
</script>