<template>
  <div>
    <v-card>

      <v-toolbar class="white--text grey " dark>
        &nbsp&nbsp&nbsp
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-text-field  hide-details single-line></v-text-field>
        <v-spacer></v-spacer>

        <!-- NEW ISSUE MODAL -->
        <IssueForm></IssueForm>

      </v-toolbar>

    </v-card>

    <br>

    <!-- TODAY'S ISSUES -->
    <h6>Today (10)</h6>
    <v-card>
      <v-list two-line>
        <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
      </v-list>
    </v-card>
    <br>

    <!-- YESTERDAY'S ISSUES -->
    <h6>Yesterday (10)</h6>
    <v-card>
      <v-list two-line>
        <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
      </v-list>
    </v-card>
    <br>


    <!-- THIS MONTH'S ISSUES -->
    <h6>This month (20)</h6>
    <v-card>
      <v-list two-line>
        <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
      </v-list>
    </v-card>
    <br>


    <!-- LAST MONTH'S ISSUES -->
    <h6>August (45)</h6>
    <v-card>
      <v-list two-line>
        <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
        <Row v-for="item in items" v-bind:item="item" v-bind:key="item.title" ></Row>
      </v-list>
    </v-card>
    <br>

    <p class="text-xs-center">
      <v-btn
      :loading="dialog"
      @click.native="loader = 'dialog'"
      :disabled="dialog"
      class="grey white--text"
      >
      <v-icon left dark>cloud_download</v-icon>
      Load more ...</v-btn>
    </p>

  </div>
</template>

<script>
  import IssueForm from './Form'
  import Row from './Row'

  export default {
    name: 'issue-list',
    components: {
      'IssueForm': IssueForm,
      'Row': Row
    },
    data () {
      return {
        dialog: false,
        checkbox: false,
        checked: true,
        items: [
        { avatar: '/static/doc-images/lists/1.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49364', title: 'Applications', creator: 'Roxanne Nivens', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
        { avatar: '/static/doc-images/lists/2.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49005', title: 'Notifications', creator: 'Palmetto Home Health & Hospice', subtitle: 'Please provide inIssueFormation so that address,phone,etc notifications can be removed' },
        { avatar: '/static/doc-images/lists/3.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49224', title: 'Notifications', creator: 'Sandra Adams', subtitle: 'Hi, We received an update on this client under the notifications and I have printed it twice and it is still there like I never printed it.. usually after I print it goes away.. am I supposed to do something else to make it go away now? Kathy Pearson Loving Care of SC' },
        { avatar: '/static/doc-images/lists/4.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49205', title: 'Mobile App', creator: 'Trevor Hansen', subtitle: 'Still having problems with Authenticare' },
        { avatar: '/static/doc-images/lists/5.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49134', title: 'Assessments', creator: 'Tri State Medical Supplies', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
        { avatar: '/static/doc-images/lists/1.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49115', title: 'Applications', creator: 'Ali Connors', subtitle: 'Assessment was completed and signed by both nurses on 09/05/2017. Narrative was completed and application was closed. Assessment reappeared on dashboard with both signatures but it appears as if it was not signed and the narrative is gone.' },
        { avatar: '/static/doc-images/lists/2.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49105', title: 'Claims Entry', creator: 'Key Choice Home Care', subtitle: 'The mobile app is not functioning on the morning of 9/7/17 and would not allow the caregiver to login. Once it allow login it would not proceed pas the page with the clients name on it and instead of showing the clients address on it said address not listed. Problem has been reported to authenticate and in phoenix' },
        { avatar: '/static/doc-images/lists/3.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49027', title: 'Other', creator: 'Sandra Adams', subtitle: 'I am trying to complete pre disaster narrative and it does not give me an option to complete. Nor is there an option for post disaster.' },
        { avatar: '/static/doc-images/lists/4.jpg', created: 'September 11th, 3:25pm', comments: 2, action: '#49019', title: 'Web', creator: 'Bryant Pharmacy And Supply', subtitle: 'Is there a way to get the new notifications for address and phone number changes off of notifications tab once viewed. We are overlooking the referrals and and authorizations due to all the new notifications not going away.' },
        { avatar: '/static/doc-images/lists/5.jpg', created: 'September 11th, 3:25pm', comments: 1, action: '#49015', title: 'Dashboard', creator: 'Britta Holt', subtitle: 'Trying to add her back into Phoenix went passed 10 day bedhold and the system states she already has an open facility request will not allow me to enter her again for a readmit' }
        ]
      }
    }
  }
</script>