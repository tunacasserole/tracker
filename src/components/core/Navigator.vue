<template>
  <v-navigation-drawer
  persistent
  overflow
  v-model="visibility"
  light
  @input="trackChange"
  >

  <v-toolbar fixed dense dark class="primary black--text">
    <v-toolbar-title class="">Filters</v-toolbar-title>
  </v-toolbar>


  <!-- CATEGORY ONE (start) -->
  <v-list >
    <v-subheader>BY ASSIGNMENT</v-subheader>
    <v-subheader>BY ASSIGNMENT</v-subheader>

    <v-list-tile href='#'>
      <v-list-tile-action>
       <v-checkbox
       v-model="checked"
       required
       ></v-checkbox>
     </v-list-tile-action>
     <v-list-tile-content>
      <v-list-tile-title>Everyone's Issues (728)</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>

  <v-list-tile href='#'>
    <v-list-tile-action>
     <v-checkbox
     v-model="checkbox"
     required
     ></v-checkbox>
   </v-list-tile-action>
   <v-list-tile-content>
    <v-list-tile-title>Unassigned Issues (30)</v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>

<v-list-tile href='#'>
  <v-list-tile-action>
   <v-checkbox
   v-model="checkbox"
   required
   ></v-checkbox>
 </v-list-tile-action>
 <v-list-tile-content>
  <v-list-tile-title>Participating (0)</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>

</v-list>
<!-- CATEGORY ONE (end) -->

<hr class="divider">

<!-- CATEGORY TWO (start) -->
<v-list >
  <v-subheader>BY STATUS</v-subheader>

  <v-list-tile href='#'>
    <v-list-tile-action>
     <v-checkbox
     v-model="checked"
     required
     ></v-checkbox>
   </v-list-tile-action>
   <v-list-tile-content>
   <v-list-tile-title>Open (728)</v-list-tile-title>
  </v-list-tile-content>
</v-list-tile>
<v-list-tile href='#'>
  <v-list-tile-action>
   <v-checkbox
   v-model="checkbox"
   required
   ></v-checkbox>
 </v-list-tile-action>
 <v-list-tile-content>
  <v-list-tile-title>Closed (48353)</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>

</v-list>
<!-- CATEGORY TWO (end) -->

<hr class="divider">

<!-- CATEGORY THREE (start) -->
<v-list >
  <v-subheader>BY OWNER</v-subheader>


  <template v-for="owner in owners">
    <v-list-tile href='#'>
      <v-list-tile-action>
       <v-checkbox
       v-model="checkbox"
       required
       ></v-checkbox>
     </v-list-tile-action>
     <v-list-tile-content>
      <v-list-tile-title>{{ owner.name }} ({{ owner.count }})</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>


</v-list>
<!-- CATEGORY THREE (end) -->

<hr class="divider">

<!-- CATEGORY FOUR (start) -->
<v-list >
  <v-subheader>BY CATEGORY</v-subheader>

  <template v-for="owner in owners">
    <v-list-tile href='#'>

      <v-list-tile-action>
        <v-checkbox
        v-model="checkbox"
        required
        ></v-checkbox>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{ owner.name }} ({{ owner.count }})</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </template>


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
        // indentation
        'closeNavigator'
      // indentation
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
        checked: true,
        checkbox: false,
        owners: [
        { name: 'Tony Matthews', count: 442 },
        { name: 'John Long', count: 63 },
        { name: 'Laura Kelley', count: 48 },
        { name: 'Roger Kinlaw', count: 24 },
        { name: 'Joe McDonald', count: 22 },
        { name: 'Rhondalyn Pelzer', count: 22 },
        { name: 'Bryann Gambrell', count: 15 },
        { name: 'Rhonda Feaster', count: 10 },
        { name: 'Linda Cunningham', count: 9 },
        { name: 'Roy Smith', count: 9 },
        { name: 'Vanessa Busbee', count: 7 },
        { name: 'Betty McGloster', count: 6 },
        { name: 'Alexis Martin', count: 4 },
        { name: 'Peter Jones', count: 4 },
        { name: 'Margaret Hopkins', count: 3 },
        { name: 'Dustin Welch', count: 3 },
        { name: 'James Cribbs', count: 2 },
        { name: 'Tiffany Brown', count: 1 },
        { name: 'David McWilliams', count: 1 },
        { name: 'Mary Fleming', count: 1 }
        ]
      }
    }
  }
</script>
<style>
.application--light .input-group--selection-controls {
  color: orange  ;
}
</style>
