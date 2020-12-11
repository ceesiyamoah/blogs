import axios from 'axios';

//!change baseUrl every 8 hours
export default axios.create({ baseURL: 'http://e3a21bb997a1.ngrok.io' });
