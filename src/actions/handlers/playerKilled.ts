import { PlayerKilled } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';
import { Role } from '@/types/game';

export default function (event: PlayerKilled) {
  store.commit(mutations.SET_PLAYER_KILLED, event.userId);

  const isYou = event.userId === store.getters.userId;

  // If the current player is the one being killed
  // redirect to the screen notifying him of his death.
  // When the player is Hitler, we don't want to redirect,
  // but rather wait for the gameWon event.
  if (isYou && store.getters.roleName !== Role.Hitler) {
    navigateTo(Route.GameIsKilled);
  }
}
