import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer CYcpmv9ECFTDXGPyxPRrCV7UovywV4bK2vpKU6lU7Ci2SC7yaIPTZuE2e_rbyvWIonyKVaJG6lLsypeaHrcpZofhiItFTviq0ReRXH8n0LmGCw5TrSNu2kmwc42uXXYx'
  }
});