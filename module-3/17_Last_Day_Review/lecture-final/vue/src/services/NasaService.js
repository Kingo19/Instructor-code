import axios from 'axios';

//https://api.nasa.gov/planetary/apod?api_key=Gt53JZCtJPHVfecMOgQg4n0fRAW64TBPBrydnl4W
const apiKey = '?api_key=REPLACE_ME';

export default {

   getPictureOfDay() {
       return axios.get('https://api.nasa.gov/planetary/apod' + apiKey);
   }

}
