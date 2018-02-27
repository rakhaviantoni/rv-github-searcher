<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <router-link :to="item.path" tag="v-list-tile" :exact="item.exact"
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="pagetitle"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view :pagetitle="pagetitle"></router-view>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Rakha Viantoni</span>
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/Home'
import About from './components/About'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'home',
        title: 'Home',
        path: '/',
        exact: true
      },{
        icon: 'info',
        title: 'About',
        path: '/about',
        exact: false
      }],
      miniVariant: false,
      pagetitle: 'VuetifyJS PWA using Github API'
    }
  },
  name: 'App',
  components: {
    Home,
    About
  }
}
</script>
