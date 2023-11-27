import { createStore as _createStore } from 'vuex';
import axios from 'axios';

export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},
      players: [
        {
            "playerId": 1,
            "firstName": "Derek",
            "lastName": "Jeter",
            "jerseyNumber": 2,
            "salary": 220000.0,
            "positions": [
                "Pitcher"
            ],
            "teamId": 1,
            "fullName": "Derek Jeter"
        },
        {
          "playerId": 10,
          "firstName": "Derek",
          "lastName": "Jones",
          "jerseyNumber": 24,
          "salary": 20000.0,
          "positions": [
              "Pitcher"
          ],
          "teamId": 1,
          "fullName": "Derek Jones"
      },        
        {
            "playerId": 2,
            "firstName": "Mariano",
            "lastName": "Rivera",
            "jerseyNumber": 42,
            "salary": 150000.0,
            "positions": [
                "Catcher"
            ],
            "teamId": 1,
            "fullName": "Mariano Rivera"
        },
        {
            "playerId": 3,
            "firstName": "Alex",
            "lastName": "Rodriguez",
            "jerseyNumber": 13,
            "salary": 250000.0,
            "positions": [
                "First Baseman"
            ],
            "teamId": 1,
            "fullName": "Alex Rodriguez"
        },
        {
            "playerId": 4,
            "firstName": "Babe",
            "lastName": "Ruth",
            "jerseyNumber": 3,
            "salary": 10000.0,
            "positions": [
                "Second Baseman"
            ],
            "teamId": 1,
            "fullName": "Babe Ruth"
        },
        {
            "playerId": 5,
            "firstName": "Lou",
            "lastName": "Gehrig",
            "jerseyNumber": 4,
            "salary": 800000.0,
            "positions": [
                "Shortstop"
            ],
            "teamId": 1,
            "fullName": "Lou Gehrig"
        }
      ]




    },
    mutations: {
      SET_AUTH_TOKEN(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },
      SET_USER(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      },
      LOGOUT(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = '';
        state.user = {};
        axios.defaults.headers.common = {};
      }
    },
  });
  return store;
}
