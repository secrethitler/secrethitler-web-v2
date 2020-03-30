import Route from '@/types/route';
import router from '@/router';
import store from '@/store';
import { mutations } from '@/store/game';

const availableWhenDead = [
  Route.GameIsKilled,
  Route.GameWon,
  Route.GameInfo,
];

export default function (route: Route) {
  // If the current player is dead, we don't want to redirect to the action,
  // unless the game is over, or he wants to see the info screen.
  if (store.getters.isDead && !availableWhenDead.includes(route)) {
    return;
  }

  router.push({ name: route, params: { id: store.getters.channelName } });

  store.commit(mutations.SET_CURRENT_ACTION, route);
}
