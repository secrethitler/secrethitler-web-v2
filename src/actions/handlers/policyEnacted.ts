import { PolicyEnacted } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: PolicyEnacted) {
  store.commit(mutations.SET_ENACTED_POLICY, event.policy);
}
