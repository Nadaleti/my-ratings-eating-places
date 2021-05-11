import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-my-ratings-19eb9.cloudfunctions.net/app/api'
});

export default instance;