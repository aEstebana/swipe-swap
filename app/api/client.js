import { create } from 'apisauce';
import cache from '../utility/cache';

const client = create({
  baseURL: 'http://68.106.8.249:9000/api',
});

const { get } = client;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default client;
