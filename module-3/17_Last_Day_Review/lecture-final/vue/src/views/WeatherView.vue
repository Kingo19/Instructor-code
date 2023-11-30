<template>
    <weather-report />
    <nasa-data/>
</template>

<script>

import WeatherReport from '../components/WeatherReport.vue';
import NasaData from '../components/NasaData.vue';

export default {

   components: {
       WeatherReport,
       NasaData
   } 

}
</script>

<style>

</style>