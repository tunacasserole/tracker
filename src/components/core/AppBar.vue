<template>
  <v-toolbar fixed dense dark class="amber black--text">
    <v-toolbar-side-icon class="black--text" @click.native.stop="toggleNavigator"></v-toolbar-side-icon>
    <v-toolbar-title>Issue Tracker (v 0.03)</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn class="black--text" icon >
      <v-icon small>fa-line-chart</v-icon>
    </v-btn>
    <v-btn class="black--text" icon @click.native.stop="toggleChooser">
      <v-icon medium>apps</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'app-bar',
    methods: {
      ...mapActions([
        'toggleNavigator',
        'toggleChooser'
      ])
    }
  }
</script>
