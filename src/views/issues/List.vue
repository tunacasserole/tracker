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
        <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>

         <v-btn
         fab
         dark
         absolute
         bottom
         right
         slot="activator"
         class="amber">
         <v-icon>add</v-icon></v-btn>

         <v-card>
          <v-container grid-list-md>
            <br>
            <h3 class="headline">Report a New Issue</h3>
            <v-layout wrap>
            <c>
              Please be as descriptive as possible and include as much information as possible. This helps us diagnose and fix issues faster. Also, please make sure that your email and phone number is up to date so that we can contact you regarding this issue. You can update this information.
              </c>
              <br>
              <br>


              <v-flex xs12>
                <v-select
                label="Category"
                required
                :items="['Administration','Applications','Approval Workflow','Assessments','Care Call','Caregiver Supports','Centralized Intake','Claims Entry','Conversations','Dashboard','Eligibility','Enrollment Criteria Not Met','Forms','Healthy Connections Prime','Home Assessments','Medications','Mobile App','Narratives','Non-waiver Supports','Notifications','Other','PASARR','Participant Information','Permissions','Provider Compliance','Provider Information','RSP Problem','Referrals','Reports','Resolutions','Scanning','Service Plans','Tablet','UAP','User Information','Waiver Supports/Services']"
                ></v-select>
              </v-flex>


              <v-flex xs12>
                <v-text-field
                label="CLTC #"
                v-model="cltc"
                required
                persistent-hint="(only if applicable)"
                ></v-text-field>
              </v-flex>


              <v-flex xs12>
                <v-menu
                lazy
                :close-on-content-click="false"
                v-model="menu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-left="40"
                max-width="290px"
                >
                <v-text-field
                slot="activator"
                label="When did this occur?"
                v-model="e3"
                prepend-icon="event"
                readonly
                ></v-text-field>
                <v-date-picker v-model="e3" no-title scrollable actions>
                  <template scope="{ save, cancel }">
                    <v-card-actions>
                      <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                      <v-btn flat primary @click.native="save()">Save</v-btn>
                    </v-card-actions>
                  </template>
                </v-date-picker>
              </v-menu>
            </v-flex>


            <v-flex xs12>
              <v-checkbox
              label="I was working on a tablet."
              v-model="checkbox"
              :error-messages="checkboxErrors"
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
              ></v-checkbox>
            </v-flex>


            IMPORTANT:
            &nbspPlease do not include any protected health information, such as participant name, social security number, or date of birth, in your description below as it will be sent to you (and the developers) in email.
            <br>


            <v-flex xs12>
              <v-text-field
              label="Description"
              required
              rows=5
              textarea=true
              ></v-text-field>
            </v-flex>


          </v-layout>

          <small>*indicates a required field.</small>

          <br>
          <br>
          <br>
          <span>
            <v-btn class="dark-grey--text normal" flat="flat" @click.native="dialog = false">Cancel</v-btn>
          </span>
          <v-btn warning class="right" @click.native="dialog = false">Submit Your Issue</v-btn>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
    <!-- END OF NEW ISSUE MODAL -->

  </v-toolbar>

</v-card>


<br>
<h6>Today (10)</h6>


<v-card>
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

        <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
      </v-list-tile-action>
      <v-divider v-if="index + 1 &lt; items.length"></v-divider>
    </v-list-tile>

  </v-list>
</v-card>


<br>
<h6>Yesterday (10)</h6>


<v-card>

  <v-list two-line>

    <br>
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

        <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
      </v-list-tile-action>
      <v-divider v-if="index + 1 &lt; items.length"></v-divider>
    </v-list-tile>

  </v-list>
</v-card>


<br>
<h6>This month (20)</h6>


<v-card>

  <v-list two-line>

    <br>
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

        <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
      </v-list-tile-action>
      <v-divider v-if="index + 1 &lt; items.length"></v-divider>
    </v-list-tile>

  </v-list>
</v-card>


<br>
<h6>August (45)</h6>


<v-card>

  <v-list two-line>

    <br>
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

        <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
      </v-list-tile-action>
      <v-divider v-if="index + 1 &lt; items.length"></v-divider>
    </v-list-tile>

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

        <span><v-icon class="grey--text text--lighten-1">chat</v-icon> {{ item.comments }}</span>
      </v-list-tile-action>
      <v-divider v-if="index + 1 &lt; items.length"></v-divider>
    </v-list-tile>

  </v-list>
</v-card>

<br>

<p class="text-xs-center">
  <v-btn
  :loading="loading3"
  @click.native="loader = 'loading3'"
  :disabled="loading3"
  class="grey white--text"
  >
  <v-icon left dark>cloud_download</v-icon>
  Load more ...
</v-btn>
</p>


</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        items: [
        { avatar: '/static/doc-images/lists/1.jpg', comments: 1, action: '#49364', title: 'Applications', headline: 'Roxanne Nivens', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
        { avatar: '/static/doc-images/lists/2.jpg', comments: 2, action: '#49005', title: 'Notifications', headline: 'me, Scrott, Jennifer', subtitle: 'Please provide information so that address,phone,etc notifications can be removed' },
        { avatar: '/static/doc-images/lists/3.jpg', comments: 1, action: '#49224', title: 'Notifications', headline: 'Sandra Adams', subtitle: 'Hi, We received an update on this client under the notifications and I have printed it twice and it is still there like I never printed it.. usually after I print it goes away.. am I supposed to do something else to make it go away now? Kathy Pearson Loving Care of SC' },
        { avatar: '/static/doc-images/lists/4.jpg', comments: 1, action: '#49205', title: 'Mobile App', headline: 'Trevor Hansen', subtitle: 'Still having problems with Authenticare' },
        { avatar: '/static/doc-images/lists/5.jpg', comments: 1, action: '#49134', title: 'Assessments', headline: 'Tri State Medical Supplies', subtitle: 'Please take out the outcome and key this Participant as Participating. She was in Re-hab, terminated for full calendar month and is now back home. Thanks.' },
        { avatar: '/static/doc-images/lists/1.jpg', comments: 2, action: '#49115', title: 'Applications', headline: 'Ali Connors', subtitle: 'Assessment was completed and signed by both nurses on 09/05/2017. Narrative was completed and application was closed. Assessment reappeared on dashboard with both signatures but it appears as if it was not signed and the narrative is gone.' },
        { avatar: '/static/doc-images/lists/2.jpg', comments: 1, action: '#49105', title: 'Claims Entry', headline: 'Key Choice Home Care', subtitle: 'The mobile app is not functioning on the morning of 9/7/17 and would not allow the caregiver to login. Once it allow login it would not proceed pas the page with the clients name on it and instead of showing the clients address on it said address not listed. Problem has been reported to authenticate and in phoenix' },
        { avatar: '/static/doc-images/lists/3.jpg', comments: 1, action: '#49027', title: 'Other', headline: 'Sandra Adams', subtitle: 'I am trying to complete pre disaster narrative and it does not give me an option to complete. Nor is there an option for post disaster.' },
        { avatar: '/static/doc-images/lists/4.jpg', comments: 2, action: '#49019', title: 'Web', headline: 'Bryant Pharmacy And Supply', subtitle: 'Is there a way to get the new notifications for address and phone number changes off of notifications tab once viewed. We are overlooking the referrals and and authorizations due to all the new notifications not going away.' },
        { avatar: '/static/doc-images/lists/5.jpg', comments: 1, action: '#49015', title: 'Dashboard', headline: 'Britta Holt', subtitle: 'Trying to add her back into Phoenix went passed 10 day bedhold and the system states she already has an open facility request will not allow me to enter her again for a readmit' }
        ]
      }
    }
  }
</script>