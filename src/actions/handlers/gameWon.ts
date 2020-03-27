import { GameWon } from '@/types/events';
import Route from '@/types/route';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';

export default function (event: GameWon) {
  store.commit(mutations.SET_GAME_WON, event);

  navigateTo(Route.GameWon);
}
