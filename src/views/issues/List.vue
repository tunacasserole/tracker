<template>
      <v-card>
        <v-toolbar class="white--text grey" dark>
          <v-toolbar-title>Issues List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>check_circle</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line>
          <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.title" @click="">
            <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
               <v-icon class="grey--text text--lighten-1">chat</v-icon>
            </v-list-tile-action>
            <v-divider v-if="index + 1 &lt; items.length"></v-divider>
          </v-list-tile>
        </v-list>
      </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { avatar: '/static/doc-images/lists/1.jpg', action: '#49364', title: 'Applications', headline: 'Roxanne Nivens', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
          { avatar: '/static/doc-images/lists/2.jpg', action: '#49005', title: 'Notifications', headline: 'me, Scrott, Jennifer', subtitle: 'Please provide information so that address,phone,etc notifications can be removed' },
          { avatar: '/static/doc-images/lists/3.jpg', action: '#49224', title: 'Notifications', headline: 'Sandra Adams', subtitle: 'Hi, We received an update on this client under the notifications and I have printed it twice and it is still there like I never printed it.. usually after I print it goes away.. am I supposed to do something else to make it go away now? Kathy Pearson Loving Care of SC' },
          { avatar: '/static/doc-images/lists/4.jpg', action: '#49205', title: 'Mobile App', headline: 'Trevor Hansen', subtitle: 'Still having problems with Authenticare' },
          { avatar: '/static/doc-images/lists/5.jpg', action: '#49134', title: 'Assessments', headline: 'Tri State Medical Supplies', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
          { avatar: '/static/doc-images/lists/1.jpg', action: '#49115', title: 'Applications', headline: 'Ali Connors', subtitle: 'Assessment was completed and signed by both nurses on 09/05/2017. Narrative was completed and application was closed. Assessment reappeared on dashboard with both signatures but it appears as if it was not signed and the narrative is gone.' },
          { avatar: '/static/doc-images/lists/2.jpg', action: '#49105', title: 'Claims Entry', headline: 'Key Choice Home Care', subtitle: 'The mobile app is not functioning on the morning of 9/7/17 and would not allow the caregiver to login. Once it allow login it would not proceed pas the page with the clients name on it and instead of showing the clients address on it said address not listed. Problem has been reported to authenticate and in phoenix' },
          { avatar: '/static/doc-images/lists/3.jpg', action: '#49027', title: 'Other', headline: 'Sandra Adams', subtitle: 'I am trying to complete pre disaster narrative and it does not give me an option to complete. Nor is there an option for post disaster.' },
          { avatar: '/static/doc-images/lists/4.jpg', action: '#49019', title: 'Web', headline: 'Bryant Pharmacy And Supply', subtitle: 'Is there a way to get the new notifications for address and phone number changes off of notifications tab once viewed. We are overlooking the referrals and and authorizations due to all the new notifications not going away.' },
          { avatar: '/static/doc-images/lists/5.jpg', action: '#49015', title: 'Dashboard', headline: 'Britta Holt', subtitle: 'Trying to add her back into Phoenix went passed 10 day bedhold and the system states she already has an open facility request will not allow me to enter her again for a readmit' }
        ]
      }
    }
  }
</script>