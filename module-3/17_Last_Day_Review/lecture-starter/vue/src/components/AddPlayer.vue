<template>
  <div>
    <div id="addplayerform">
      <div class="status-message error" v-show="errorMsg != ''">{{errorMsg}}</div>  
      <form class="playerForm" v-on:submit.prevent="sendForm">
        <div class="form-group">
          <label for="jerseyNumber">Jersey Number:</label>
          <input id="jerseyNumber" type="text" class="form-control" v-model.number="newPlayer.jerseyNumber" />
        </div>
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input id="firstName" type="text" class="form-control" v-model="newPlayer.firstName"/>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input id="lastName" type="text" class="form-control" v-model="newPlayer.lastName"/>
        </div>
        <div class="form-group">
          <label for="salary">Salary:</label>
          <input id="salary" type="text" class="form-control" v-model.number="newPlayer.salary"/>
        </div>
        <div class="form-group">
          <label for="salary">Position:</label>
          <select v-model="selectedValue">
            <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">{{option.value}}</option>
          </select>
        </div>

        <button class="btn btn-submit">Submit</button>
        <button class="btn btn-cancel" type="cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>

import playerService from '../services/PlayerService.js';

export default {
  data() {
    return {
      selectedValue: "",

      errorMsg: '',

      options: [
        { value: "", text: "" },
        { value: "Pitcher", text: "Pitcher" },
        { value: "Catcher", text: "Catcher" },
        { value: "First Baseman", text: "First Baseman" },
        { value: "Second Baseman", text: "Second Baseman" },
        { value: "Third Baseman", text: "Third Baseman" },
        { value: "Shortstop", text: "Shortstop" },
        { value: "Outfielder", text: "Outfielder" },
      ],

      newPlayer: {
        firstName: "",
        lastName: "",
        jerseyNumber: "",
        salary: "",
        positions: [],
        teamId: 1,
        fullName: "",
      },
    };
  },
  methods: {

    sendForm() {

      this.newPlayer.positions[0] = this.selectedValue;
      this.newPlayer.fullName = this.newPlayer.firstName + " " + this.newPlayer.lastName;

       playerService.addPlayer(this.newPlayer)
       .then ( response => {
           if (response.status === 201) {
               //we are successful
               console.log(response.data);
               this.$router.push({name: 'search'})
           }
       }).catch( error => {
           this.handleErrorResponse(error);

       });

    },
    handleErrorResponse(error) {
         console.log(error);
         if (error.response) {
             this.errorMsg = 'Error adding new player. Error: ' + error.response.status;
         }
         else if(error.request) {
             this.errorMsg = 'Error adding new player. Error: server unavailable';
         }
         else {
             this.errorMsg = 'Java Green has left you high and dry. You would be better off hiring the C# class';
         }
    }

  }
};
</script>

<style scoped>
#addplayerform {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
form input {
  width: 100%;
}
.playerForm {
  padding: 10px;
  margin-bottom: 10px;
}
.form-group {
  margin-bottom: 10px;
  margin-top: 10px;
}
.form-control {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 30px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
textarea.form-control {
  height: 75px;
  font-family: Arial, Helvetica, sans-serif;
}
select.form-control {
  width: 20%;
  display: inline-block;
  margin: 10px 20px 10px 10px;
}
.btn-submit {
  color: #fff;
  padding: 10px 24px;
  background-color: #38b412;
  box-shadow: 0 12px 26px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn-cancel {
  padding: 10px 24px;
  box-shadow: 0 12px 26px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn-submit:hover {
  color: #fff;
  padding: 10px 24px;
  background-color: #65f307;
  box-shadow: 0 12px 26px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn-cancel:hover {
  padding: 10px 24px;
  background-color: #65f307;
  box-shadow: 0 12px 26px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.status-message {
  display: block;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
}
.status-message.success {
  background-color: #90ee90;
}
.status-message.error {
  background-color: #f08080;
}
</style>