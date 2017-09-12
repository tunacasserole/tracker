<template>
  <v-list-tile avatar ripple @click="">
    <v-list-tile-avatar>
      <img v-bind:src="item.avatar"/>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.creator }}</v-list-tile-sub-title>
      <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>

      <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
    </v-list-tile-action>
  </v-list-tile>
</template>


<script>
  export default {
    name: 'IssueRow',
    props: ['item']
  }
</script>
