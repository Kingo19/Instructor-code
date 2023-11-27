<template>
  <div>
      <img src="../assets/java-green.png" alt="">
     <p id="pageTitle">{{pageTitle}}</p>

    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Home</router-link> | 
      <a href="#">About</a> |
      <router-link v-bind:to="{ name: 'search' }">Roster</router-link> |
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
      <router-link v-bind:to="{ name: 'login' }" v-if="$store.state.token == ''">Log in</router-link>
    </div>
  </div>
</template>

<script>
export default {

    data() {

       return {
           pageTitle: 'Java Green Player Tracker'
       }

    }

}
</script>

<style scoped>

#pageTitle {
    text-align: center;
}

img {
    width: 15%;
    height: auto;
    display:block;
    margin-left:auto;
    margin-right:auto
}

#nav {
    display:flex;
    justify-content: center;
}
#nav a {
    padding: 13px 25px;
    background-color: rgb(12, 116, 12);
    color: black;
    border-radius: 6px;
}

#nav a:hover {
    background-color: #56e38b;
    color:white;
}
</style>