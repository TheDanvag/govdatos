import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const obtenerPoliticas = () => {
  return axios.get(`${API_URL}/politicas`);
};
