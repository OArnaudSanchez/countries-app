import axios from 'axios';
const URL = 'https://restcountries.eu/rest/v2/';

export default axios.create({
    baseURL: URL
});