<template>
  <v-app>
  <app-navigation-drawer></app-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <span class="material-icons menuBar" @click="toggleMenu">menu</span>
    </v-app-bar>
    <v-main></v-main>
  </v-app>
</template>

<script>
import Navigation from './components/menus/NavigationDrawer'
export default {
  name: 'App',

  components: {
    appNavigationDrawer: Navigation
  },

  data: () => ({
    isMenuClicked: false
  }),

  methods: {
    toggleMenu () {
      this.isMenuClicked = !this.isMenuClicked
    }
  }
}
</script>

<style>
  .menuBar{
    cursor: pointer;
  }
</style>
