import { UserID } from '@/types/game';
import execute from '@/api/player/execute';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default async function executePlayer(id: UserID) {
  const { data } = await execute(id);

  navigateTo(Route.GameInfo);
}
