<template>
  <div>
    <h1>Player Search</h1>


    <div id="searchPlayer">
        <label for="">Search Player</label>
        <input type="text" name="playerName" v-model="nameFilter">
    </div>

    <div class="divTable greenTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">Picture</div>
          <div class="divTableHead">Jersey Number</div>
          <div class="divTableHead">Player Name</div>
          <div class="divTableHead">Salary</div>
          <div class="divTableHead">Position</div>
        </div>
      </div>
      <div class="divTableBody">
        <div class="divTableRow" v-for="player in filteredPlayers" v-bind:key="player.playerId">
          <div class="divTableCell">image for {{player.playerId}}</div>
          <div class="divTableCell">{{player.jerseyNumber}}</div>
          <div class="divTableCell">{{player.fullName}}</div>
          <div class="divTableCell">{{player.salary}}</div>
          <div class="divTableCell">{{player.positions[0]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

   data() {
       return {
           nameFilter: ''
       }
   },
   computed: {
       filteredPlayers() {
           const players = this.$store.state.players;

           return players.filter( player => {
               return this.nameFilter == '' ? true : player.fullName.includes(this.nameFilter);
           })
       }
   }



};
</script>

<style scoped>

#searchPlayer {
    margin:30px;
}

input[type=text] {
    margin: 10px;
    width: 20%;
    padding: 8px 16px;
    border: 2px solid green;
    border-radius: 5px;
}



div.greenTable {
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #24943a;
  background-color: #d4eed1;
  width: 90%;
  text-align: center;
}
.divTable.greenTable .divTableCell,
.divTable.greenTable .divTableHead {
  border: 1px solid #24943a;
  padding: 3px 2px;
}
.divTable.greenTable .divTableBody .divTableCell {
  font-size: 13px;
}
.divTable.greenTable .divTableHeading {
  background: #10940e;
  background: -moz-linear-gradient(top, #4caf4a 0%, #289e26 66%, #10940e 100%);
  background: -webkit-linear-gradient(
    top,
    #4caf4a 0%,
    #289e26 66%,
    #10940e 100%
  );
  background: linear-gradient(to bottom, #4caf4a 0%, #289e26 66%, #10940e 100%);
  border-bottom: 0px solid #444444;
}
.divTable.greenTable .divTableHeading .divTableHead {
  font-size: 19px;
  font-weight: normal;
  color: #f0f0f0;
  text-align: left;
  border-left: 2px solid #24943a;
}
.divTable.greenTable .divTableHeading .divTableHead:first-child {
  border-left: none;
}

.greenTable .tableFootStyle {
  font-size: 13px;
}
.greenTable .tableFootStyle .links {
  text-align: right;
}
.greenTable .tableFootStyle .links a {
  display: inline-block;
  background: #ffffff;
  color: #24943a;
  padding: 2px 8px;
  border-radius: 5px;
}
.greenTable.outerTableFooter {
  border-top: none;
}
.greenTable.outerTableFooter .tableFootStyle {
  padding: 3px 5px;
}
/* DivTable.com */
.divTable {
  display: table;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
}
.divTableCell,
.divTableHead {
  display: table-cell;
}
.divTableHeading {
  display: table-header-group;
}
.divTableFoot {
  display: table-footer-group;
}
.divTableBody {
  display: table-row-group;
}
</style>