<template>
  <v-tabs centered>
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="toggleNavigator"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn class="black--text" icon >
        <v-icon small>fa-line-chart</v-icon>
      </v-btn>
      <v-btn class="black--text" icon @click.native.stop="toggleChooser">
        <v-icon medium>apps</v-icon>
      </v-btn>
      <v-toolbar-title slot="extension" class="display-2">Issue Tracker</v-toolbar-title>
    </v-toolbar>
    <v-tabs-bar  class="grey lighten-4 centered" >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tabs-item
        href="#tab-issues"
      >
        Issues
      </v-tabs-item>
      <v-tabs-item
        href="#tab-features"
      >
        Feature Requests
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content id="tab-issues">
        <v-card>
          <v-card-text>ISSUES RESOLUTION TRACKING</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
    <v-tabs-items>
      <v-tabs-content id="tab-features">
        <v-card >
          <v-card-text>NEW FEATURE DEVELOPMENT</v-card-text>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>
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
    },
    data () {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
