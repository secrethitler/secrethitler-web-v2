import { PlayerKilled } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: PlayerKilled) {
  store.commit(mutations.SET_PLAYER_KILLED, event.userId);

  const isYou = event.userId === store.getters.userId;

  // If the current player is the one being killed
  // redirect to the screen notifying him of his death.
  if (isYou) {
    navigateTo(Route.GameIsKilled);
  }
}
