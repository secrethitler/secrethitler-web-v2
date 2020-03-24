import { ChancellorElected } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: ChancellorElected) {
  store.commit(mutations.SET_CHANCELLOR_ELECTED, event.elected);

  // TODO add rediret.
}
