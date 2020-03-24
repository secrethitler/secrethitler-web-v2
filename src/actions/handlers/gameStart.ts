import { GameStart } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import Routes from '@/types/routes';
import navigateTo from '@/utils/navigateTo';

export default function (event: GameStart) {
  store.commit(mutations.SET_ROLE, event.roleName);

  navigateTo(Routes.GameInfo);
}
