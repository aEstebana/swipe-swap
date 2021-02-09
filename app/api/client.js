import { create } from 'apisauce';
import cache from '../utility/cache';
import AuthStorage from '../auth/storage';

const client = create({
  baseURL: 'http://192.168.0.2:9000/api',
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await AuthStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-toke'] = authToken;
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
