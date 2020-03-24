import Routes from '@/types/routes';
import router from '@/router';
import store from '@/store';

export default function (page: Routes) {
  router.push({ name: page, params: { id: store.getters.channelName } });
}
