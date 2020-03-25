import { NotifyPresident } from '@/types/events';
import Route from '@/types/route';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';

export default function (event: NotifyPresident) {
  store.commit(mutations.SET_CHANCELLOR_ELECTED, event.electable);

  navigateTo(Route.GameNominate);
}
