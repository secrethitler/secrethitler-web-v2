import { ChancellorReceivePolicies } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: ChancellorReceivePolicies) {
  store.commit(mutations.SET_CHANCELLOR_POLICIES, event.policies);

  navigateTo(Route.GameInfo);
}
