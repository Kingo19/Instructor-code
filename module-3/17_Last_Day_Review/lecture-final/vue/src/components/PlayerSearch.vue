<template>
  <div>
    <p>Player search page</p>


    <div id="searchPlayer">
      <label for="">Search Player</label>
      <input type="text" name="playerName" v-model="nameFilter" />
    </div>
    <div class="divTable greenTable">
      <div class="divTableHeading">
        <div class="divTableRow">
          <div class="divTableHead">Picture</div>
          <div class="divTableHead">Jersey Number</div>
          <div class="divTableHead">Full Name</div>
          <div class="divTableHead">Position</div>
          <div class="divTableHead">Salary</div>
          <div class="divTableHead">Stats</div>
        </div>
      </div>
      <div class="divTableBody">
        <div
          class="divTableRow"
          v-for="player in filteredPlayers"
          v-bind:key="player.playerId"
        >
          <div class="divTableCell">
            <img id="thumbnail" v-bind:src="player.imageURL" alt="" />
          </div>
          <div class="divTableCell">{{ player.jerseyNumber }}</div>
          <div class="divTableCell">{{ player.fullName }}</div>
          <div class="divTableCell">{{ player.positions[0] }}</div>
          <div class="divTableCell">{{ player.salary }}</div>
          <div class="divTableCell">coming soon</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playerService from "../services/PlayerService.js";

export default {
  data() {
    return {
      nameFilter: "",
      players: [],
    };
  },
  computed: {
    filteredPlayers() {
      const players = this.players;

      return players.filter((player) => {
        return this.nameFilter == ""
          ? true
          : player.fullName.includes(this.nameFilter);
      });
    },
  },
  created() {
    playerService.fetchPlayers().then((response) => {
      this.players = response.data;
      console.log(response.data);
    });
  },
};
</script>

<style scoped>
#thumbnail {
  width: 100px;
  height: auto;
}

input[type="text"] {
  margin: 10px;
  width: 20%;
  padding: 8px 16px;
  border: 2px solid green;
  border-radius: 5px;
}

div.greenTable {
  font-family: Georgia, serif;
  border: 6px solid #24943a;
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
  background: #24943a;
  background: -moz-linear-gradient(top, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  background: -webkit-linear-gradient(
    top,
    #5baf6b 0%,
    #3a9e4d 66%,
    #24943a 100%
  );
  background: linear-gradient(to bottom, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  border-bottom: 0px solid #444444;
}
.divTable.greenTable .divTableHeading .divTableHead {
  font-size: 19px;
  font-weight: bold;
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