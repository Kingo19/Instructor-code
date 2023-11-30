import axios from 'axios';

export default {

    fetchPlayers() {
        return axios.get('/players')
    },

    addPlayer(player) {
        return axios.post('/players', player)
    }

}
