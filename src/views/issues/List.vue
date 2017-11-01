<template>
  <div>

    <v-list two-line>
      <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
    </v-list>

    <issueForm />

</div>
</template>

<script>
import issueForm from './Form'
import Row from './Row'

export default {
  components: {
    'issueForm': issueForm,
    'Row': Row
  },

  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    dialog: false,
    checkbox: false,
    checked: true,
    items: [
    { avatar: '/static/doc-images/lists/1.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49364', title: 'Applications', creator: 'Roxanne Nivens', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
    { avatar: '/static/doc-images/lists/2.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49005', title: 'Notifications', creator: 'Palmetto Home Health & Hospice', subtitle: 'Please provide inissueFormation so that address,phone,etc notifications can be removed' },
    { avatar: '/static/doc-images/lists/3.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49224', title: 'Notifications', creator: 'Sandra Adams', subtitle: 'Hi, We received an update on this client under the notifications and I have printed it twice and it is still there like I never printed it.. usually after I print it goes away.. am I supposed to do something else to make it go away now? Kathy Pearson Loving Care of SC' },
    { avatar: '/static/doc-images/lists/4.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49205', title: 'Mobile App', creator: 'Trevor Hansen', subtitle: 'Still having problems with Authenticare' },
    { avatar: '/static/doc-images/lists/5.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49134', title: 'Assessments', creator: 'Tri State Medical Supplies', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
    { avatar: '/static/doc-images/lists/1.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49115', title: 'Applications', creator: 'Ali Connors', subtitle: 'Assessment was completed and signed by both nurses on 09/05/2017. Narrative was completed and application was closed. Assessment reappeared on dashboard with both signatures but it appears as if it was not signed and the narrative is gone.' },
    { avatar: '/static/doc-images/lists/2.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49105', title: 'Claims Entry', creator: 'Key Choice Home Care', subtitle: 'The mobile app is not functioning on the morning of 9/7/17 and would not allow the caregiver to login. Once it allow login it would not proceed pas the page with the clients name on it and instead of showing the clients address on it said address not listed. Problem has been reported to authenticate and in phoenix' },
    { avatar: '/static/doc-images/lists/3.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49027', title: 'Other', creator: 'Sandra Adams', subtitle: 'I am trying to complete pre disaster narrative and it does not give me an option to complete. Nor is there an option for post disaster.' },
    { avatar: '/static/doc-images/lists/4.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49019', title: 'Web', creator: 'Bryant Pharmacy And Supply', subtitle: 'Is there a way to get the new notifications for address and phone number changes off of notifications tab once viewed. We are overlooking the referrals and and authorizations due to all the new notifications not going away.' },
    { avatar: '/static/doc-images/lists/5.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49015', title: 'Dashboard', creator: 'Britta Holt', subtitle: 'Trying to add her back into Phoenix went passed 10 day bedhold and the system states she already has an open facility request will not allow me to enter her again for a readmit' }
    ]
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'red', icon: 'add' }
        case 'two': return { 'class': 'yellow', icon: 'edit' }
        default: return {}
      }
    }
  }
}
</script>

