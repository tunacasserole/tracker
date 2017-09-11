<template>
  <v-navigation-drawer
      persistent
      overflow
      v-model="visibility"
      light
      @input="trackChange"
    >
    <v-toolbar dense dark class="primary black--text mb-4">
      <v-toolbar-title class="">Filters</v-toolbar-title>
    </v-toolbar>

    <!-- CATEGORY ONE (start) -->
    <v-list dense>
      <v-subheader>ASSIGNMENT</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Unassigned Issues</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Participating</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Everyone's Issues</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY ONE (end) -->

    <hr class="divider">

    <!-- CATEGORY TWO (start) -->
    <v-list dense>
      <v-subheader>STATUS</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Open</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Closed</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY TWO (end) -->

    <hr class="divider">

    <!-- CATEGORY THREE (start) -->
    <v-list dense>
      <v-subheader>BY OWNER</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Tony Mathews</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>John Long</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Laura Kelley</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY THREE (end) -->

<hr class="divider">

    <!-- CATEGORY FOUR (start) -->
    <v-list dense>
      <v-subheader>CATEGORIES</v-subheader>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Administration</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Applications</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile href='#'>
        <v-list-tile-action>
          <v-icon primary>checkbox</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Approval Workflow</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
    <!-- CATEGORY FOUR (end) -->

    </v-navigation-drawer>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navigator',
    methods: {
      ...mapActions([
        'closeNavigator'
      ]),
      trackChange (e) {
        if (this.navigatorVisible === true && e === false) {
          this.closeNavigator()
        }
      }
    },
    computed: {
      ...mapGetters({
        navigatorVisible: 'navigatorVisible'
      }),
      visibility: {
        get () {
          return this.navigatorVisible
        },
        set () {

        }
      }
    },
    data () {
      return {
      }
    }
  }
</script>
