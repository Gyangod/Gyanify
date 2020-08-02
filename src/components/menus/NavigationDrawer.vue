<template>
  <navigation-drawer v-model="drawer" app>
    <v-list-item>
      <v-list-item-title>Settings</v-list-item-title>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-avatar><span class="material-icons">public</span></v-list-item-avatar>
      <v-list-item-title>Choose Language</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-avatar><span class="material-icons">brightness_4</span></v-list-item-avatar>
      <v-list-item-title>Dark Mode</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-avatar><span class="material-icons">local_library</span></v-list-item-avatar>
      <v-list-item-title>About and Contact us</v-list-item-title>
    </v-list-item>
  </navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation-drawer',
  // props: ['app'],
  data: () => {
    return {
      drawer: false
    }
  }
}
</script>
