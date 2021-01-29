import { create } from 'apisauce';

const client = create({
  baseURL: 'http://192.168.0.2:9000/api/',
});

export default client;
