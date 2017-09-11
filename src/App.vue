<template>
  <v-app light toolbar>
    <navigator />
    <chooser />
    <app-bar />
    <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
    </main>
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

<style lang="stylus">
  @import './stylus/main'
</style>
