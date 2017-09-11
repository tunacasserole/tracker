<template>
  <v-navigation-drawer
    temporary
    v-model="visibility"
    @input="trackChange"
    right
  >

    <v-toolbar fixed dark dense class="primary black--text">
      <v-toolbar-title>Applications</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="black--text">more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list dense class="mt-5">
      <v-subheader>LEGACY SYSTEMS</v-subheader>
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Phoenix</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Providers</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>

    <v-list dense>
      <v-subheader>TOOLBELT</v-subheader>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Communication Center</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Issue Tracker</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>


    <v-list dense>
      <v-subheader>CONSUMER APPS</v-subheader>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>E-Referral</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Waiting Lists</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/">
        <v-list-tile-action>
          <v-icon>filter_none</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>My Requests</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'chooser',
    methods: {
      ...mapActions([
        'closeChooser'
      ]),
      trackChange (e) {
        if (this.chooserVisible === true && e === false) {
          this.closeChooser()
        }
      }
    },
    computed: {
      ...mapGetters({
        chooserVisible: 'chooserVisible'
      }),
      visibility: {
        get () {
          return this.chooserVisible
        },
        set () {
          this.toggleChooser
        }
      }
    }
  }
</script>
