import { PresidentReceivePolicies } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: PresidentReceivePolicies) {
  store.commit(mutations.SET_PRESIDENT_POLICIES, event.policies);

  // TODO add redirect
}
