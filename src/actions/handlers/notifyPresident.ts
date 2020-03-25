import { NotifyPresident } from '@/types/events';
import Route from '@/types/route';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';

export default function (event: NotifyPresident) {
  store.commit(mutations.SET_ELECTABLE, event.electable);

  navigateTo(Route.GameNominate);
}
