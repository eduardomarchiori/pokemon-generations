import axios from 'axios';

export const requestApi = axios.create({
  headers: { 'Content-type': 'application/json' },
});
