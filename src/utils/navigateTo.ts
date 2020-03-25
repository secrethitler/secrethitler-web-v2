import Route from '@/types/route';
import router from '@/router';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (route: Route) {
  router.push({ name: route, params: { id: store.getters.channelName } });

  store.commit(mutations.SET_CURRENT_ACTION, route);
}
