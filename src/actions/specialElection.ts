import { UserID } from '@/types/game';
import specialElection from '@/api/round/specialElection';

export default async function (nextPresidentId: UserID) {
  const { data } = await specialElection(nextPresidentId);
}
