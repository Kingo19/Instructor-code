<template>
  <div id="capstone-app">
    <the-header />
    <router-view />
    <the-footer/>  
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
      TheHeader,
      TheFooter
  }
}
</script>

<style>

 h1 {
   font-size: 2em;
   font-weight: 700;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }

 p {
   font-size: 1.1em;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }

 a {
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 }


</style>
