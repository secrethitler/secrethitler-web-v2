/* eslint-disable no-param-reassign */
import axios from 'axios';
import nprogress from 'nprogress';
import store from '@/store';

const instance = axios.create({
  baseURL: 'https://api.secrethitler.tk',
  // baseURL: 'https://geheimerdeutscher.tk/api',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  nprogress.start();

  const { token, userId, channelName } = store.getters;

  if (token && userId && channelName) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Basic ${btoa(token)}`;

    if (config.method === 'post') {
      config.data = {
        userId,
        channelName,
        ...config.data,
      };
    } else if (config.method === 'get') {
      config.params = {
        userId,
        channelName,
        ...config.params,
      };
    }
  }

  return config;
});

instance.interceptors.response.use(
  (response) => {
    nprogress.done();

    return response;
  },
  (error) => {
    nprogress.done();

    return Promise.reject(error);
  },
);

export default instance;
