import { Policy } from '@/types/game';
import presidentPick from '@/api/policy/presidentPick';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default async function presidentPolicyPick(discardedPolicy: Policy) {
  const { data } = await presidentPick(discardedPolicy);

  navigateTo(Route.GameInfo);
}
