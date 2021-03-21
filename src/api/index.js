import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.deezer.com/',
  timeout: 3000,
});
