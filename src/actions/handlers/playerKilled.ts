import { PlayerKilled } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: PlayerKilled) {
  store.commit(mutations.SET_PLAYER_KILLED, event.userId);
  const isYou = event.userId === store.getters.userId;

  if (isYou) {
    // TODO add redirect
  }
}
