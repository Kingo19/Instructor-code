<template>
  <div>
      <button v-on:click="getPicOfDay">Click here to win a prize</button>
      <p>{{info.title}}</p>
      <p>{{info.explanation}}</p>
      <div>
          <img v-bind:src="info.url" alt="">
      </div>
  </div>
</template>

<script>

import nasaService from '../services/NasaService.js';

export default {

    data() {
        return {
            info: {}
        }
    },
    methods: {
        getPicOfDay() {
            nasaService.getPictureOfDay().then( response => {
                this.info = response.data;
            });
        }
    }

}
</script>

<style>

</style>