import veto from '@/api/round/veto';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default async function (accepted: boolean) {
  await veto(accepted);

  navigateTo(Route.GameInfo);
}
