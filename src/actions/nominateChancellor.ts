import { UserID } from '@/types/game';
import nominate from '@/api/chancellor/nominate';

export default async function nominateChancellor(nominatedId: UserID) {
  const { data } = await nominate(nominatedId);
}
