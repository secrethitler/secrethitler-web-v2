import store from '@/store';
import join from '@/api/game/join';
import { mutations } from '@/store/game';
import { ChannelName } from '@/types/game';
import Routes from '@/types/routes';
import navigateTo from '@/utils/navigateTo';

export default async function (userName: string, channelName: ChannelName) {
  const { data } = await join(userName, channelName);

  store.commit(mutations.INIT_GAME, data);

  navigateTo(Routes.GameLobby);
}
