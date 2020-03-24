import Pusher from 'pusher-js';
import { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $pusher: Pusher,
    $http: AxiosInstance
  }
}
