import store from '@/store';
import join from '@/api/game/join';
import { mutations } from '@/store/game';
import { ChannelName } from '@/types/game';
import Route from '@/types/route';
import navigateTo from '@/utils/navigateTo';

export default async function (userName: string, channelName: ChannelName) {
  const { data } = await join(userName, channelName);

  store.commit(mutations.INIT_GAME, data);

  navigateTo(Route.GameLobby);
}
