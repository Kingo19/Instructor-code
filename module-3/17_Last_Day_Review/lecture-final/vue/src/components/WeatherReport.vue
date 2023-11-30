<template>
   <div>
       <p v-show="errorMsg != ''">{{errorMsg}}</p>
       <h2>Weather Report</h2>
       <p>{{weather}}</p>
   </div>
</template>

<script>
export default {
    data() {
        return {
            weather: {},
            errorMsg: ''
        }
    },
    created() {

        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=REPLACE_ME')
        .then( response => {
            if (response.status != 200) {
                this.errorMsg = "Error: " + response.status;
                console.log(response.status);
            }
            else {
                // Examine the text in the response
                response.json().then( data => {
                    console.log(data);
                    this.weather = data;
                })

            }
        }).catch( error => {
            console.log("Fetch Error: " + error);
            this.errorMsg = error;
        }) 

    }

}
</script>

<style scoped>

</style>