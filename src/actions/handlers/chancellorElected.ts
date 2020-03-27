import { ChancellorElected } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: ChancellorElected) {
  store.commit(mutations.SET_CHANCELLOR_ELECTED, event.elected);

  // If the chancellor is successfully elected, we don't want the
  // president to navigate to the result page, but rather
  // to the policy pick page that will be triggered by an event.
  if (
    event.elected
    && store.getters.president.userId === store.getters.userId
  ) {
    // Use an early return to stop programm execution.
    return;
  }

  navigateTo(Route.GameVoteResult);
}
