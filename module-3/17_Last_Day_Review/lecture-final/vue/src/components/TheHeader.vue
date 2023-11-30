<template>
  <div id="container">
    <img src="../assets/logo.webp" alt=""/>    
    <h1 id="siteTitle">{{ title }}</h1>
    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Home</router-link>
      <router-link v-bind:to="{ name: 'search' }">List Players</router-link>
      <router-link v-bind:to="{ name: 'addplayer' }" v-if="$store.state.token != ''">Add Player</router-link>
      <router-link v-bind:to="{ name: 'weather' }">Weather</router-link>
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
      <router-link v-bind:to="{ name: 'login' }" v-if="$store.state.token == ''">Login</router-link>
    </div>

    <p v-if="$store.state.token != ''">Welcome, {{$store.state.user.username}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Greenies Sports Tracker",
    };
  },
};
</script>

<style scoped>
#siteTitle {
  text-align: center;
}


img {
    width: 20%;
    height: auto;

}

#container { 
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

#nav a {
    margin: 5px;
    padding: 13px 25px;
    background-color: rgb(13, 139, 13);
    color: black;
    border-radius: 6px;
}

#nav a:hover {
    background-color: #56e38b;
    color:white;
}


</style>
