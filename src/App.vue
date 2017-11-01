<template>
  <v-app light toolbar>
    <navigator />
    <chooser />
    <app-bar />
    <main>
      <v-container fluid class='pa-0'>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer>
      <v-card-text>
        <p class="grey--text text-xs-center">Phoenix ©2017</p>
        <span class="grey--text text-lg-center"></span>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from './components/core/AppBar'
import Chooser from './components/core/Chooser'
import Navigator from './components/core/Navigator'

export default {
  name: 'app',
  components: {
    AppBar,
    Chooser,
    Navigator
  }
}
</script>

<style lang='stylus'>
@import './stylus/main'
</style>
