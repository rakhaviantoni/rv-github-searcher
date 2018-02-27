<template>
 <div class="home">
  <v-container fill-height>
   <v-layout row wrap align-center>
    <v-flex xs12 class="text-xs-center">
      <h1>{{ pagetitle }}</h1>
        <v-form ref="form" lazy-validation v-on:submit.prevent="getUserData">
          <v-text-field
            label="Enter Your Github's Username"
            v-model="username"
            :rules="rules"
            required
            autofocus
          ></v-text-field>
          <v-btn @click="getUserData">Search</v-btn>
          <v-btn @click="clear">Clear</v-btn>
        </v-form> <br/>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <div v-if="loading" class="text-xs-center">
          <label>Getting your data...</label>
        </div>
          
        <v-card v-else-if="user !== null">
          <v-card-media v-bind:src="user.avatar_url" height="500">
          </v-card-media>
          <v-card-title primary-title>
        <div>
          <div class="headline">{{ user.login }}</div>
          <div>Profile name : {{ user.name }}<br>Profile bio : {{ user.bio }}</div>
        </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat v-if="user.html_url !== null" :href="user.html_url" target="_blank">Visit Github Page</v-btn>
          <v-btn flat v-if="user.blog !== ''" :href="'https://'+user.blog" target="_blank">Visit Blog</v-btn>
        </v-card-actions>
      </v-card> 
    </v-flex>
   </v-layout>
  </v-container>
 </div>
</template>

<script>
  import github from '@/services/github'
  export default {
    props: ['pagetitle'],
    data () {
      return {
        username: '',
        user: null,
        rules: [
          v => !!v || 'Username is required',
          v => (v && v.length > 2) || 'Username must be not less than 2 characters'
        ],
        loading: false
      }
    },
    name: 'Home',
    methods: {
      async getUserData() {
        this.loading = true;
        this.user = null;
        const result = await github.searchUser({
          username: this.username
        }).then(response => {
          this.loading = false;
          this.user = response.data;
        }).catch(error => {
          this.loading = false;
          console.log(error)
        });
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>