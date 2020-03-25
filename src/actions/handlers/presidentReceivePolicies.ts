import { PresidentReceivePolicies } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: PresidentReceivePolicies) {
  store.commit(mutations.SET_PRESIDENT_POLICIES, event.policies);

  navigateTo(Route.GamePresidentPolicyPick);
}
