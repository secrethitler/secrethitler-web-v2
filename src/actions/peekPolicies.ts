import peek from '@/api/policy/peek';
import store from '@/store';
import { mutations } from '@/store/game';

export default async function peekPolicies() {
  const { data } = await peek();

  store.commit(mutations.SET_PEEKED_POLICIES, data.policies);
}
