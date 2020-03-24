import store from '@/store';
import { UserID, ChannelName } from '@/types/game';

export default function (): {
  userId: UserID,
  channelName: ChannelName
  } {
  return {
    userId: store.getters.userId,
    channelName: store.getters.channelName,
  };
}
