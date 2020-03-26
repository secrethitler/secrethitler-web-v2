import { Policy } from '@/types/game';
import presidentPick from '@/api/policy/presidentPick';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';
import chancellorPick from '@/api/policy/chancellorPick';

export default async function chancellorPolicyPick(discardedPolicy: Policy) {
  const { data } = await chancellorPick(discardedPolicy);

  navigateTo(Route.GameInfo);
}
