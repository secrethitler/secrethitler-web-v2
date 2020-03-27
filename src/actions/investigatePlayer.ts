import { UserID } from '@/types/game';
import investigate from '@/api/player/investigate';

export default async function investigatePlayer(id: UserID) {
  const { data } = await investigate(id);

  return data;
}
