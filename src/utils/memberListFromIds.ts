import { UserID, Member } from '@/types/game';
import store from '@/store';

export default function memberListFromIds(ids: UserID[]) {
  const { members } = store.getters;

  return members.filter((member: Member) => ids.includes(member.userId));
}
