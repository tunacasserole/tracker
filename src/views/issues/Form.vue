<!-- NEW ISSUE MODAL -->
<template>
  <div>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>

     <v-btn
     fab
     dark
     absolute
     bottom
     right
     slot="activator"
     warning>
     <v-icon>add</v-icon></v-btn>

     <v-card>
      <v-container grid-list-md>
        <br>
        <v-chip label outline class="green green--text right">{{ status }} </v-chip>
        <h3 class="headline">Report a New Issue</h3>
        <br>
        <v-layout wrap>
          <p>
            Please be as descriptive as possible and include as much information as possible. This helps us diagnose and fix issues faster. Also, please make sure that your email and phone number is up to date so that we can contact you regarding this issue. You can update this information.
          </p>
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
            placeholder="(only if applicable)"
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
            v-model="when"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="when" no-title scrollable actions>
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
          label="The issue occurred on a tablet."
          v-model="checkbox"
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
          textarea
          ></v-text-field>
        </v-flex>


      </v-layout>

      <small>*indicates a required field.</small>

      <br>
      <br>
      <br>
      <span>
        <v-btn outline @click.native="dialog = false">Cancel</v-btn>
      </span>
      <v-btn warning class="right" @click.native="dialog = false">Submit Your Issue</v-btn>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-container>
  </v-card>
</v-dialog>
</div>
</template>
<!-- END OF NEW ISSUE MODAL -->


<script>
  export default {
    name: 'IssueForm',
    data () {
      return {
        dialog: false,
        checkbox: false,
        checked: true,
        cltc: '',
        menu: '',
        when: '',
        status: 'OPEN',
        checkboxErrors: ''
      }
    }
  }
</script>
