import { ChancellorElected, NotifyPresident } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: NotifyPresident) {
  store.commit(mutations.SET_CHANCELLOR_ELECTED, event.electable);

  // TODO add rediret.
}
