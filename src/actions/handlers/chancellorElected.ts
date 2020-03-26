import { ChancellorElected } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: ChancellorElected) {
  store.commit(mutations.SET_CHANCELLOR_ELECTED, event.elected);

  // if not president redirect to result page.
  if (store.getters.president.userId !== store.getters.userId) {
    navigateTo(Route.GameVoteResult);
  }
}
