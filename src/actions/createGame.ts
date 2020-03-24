import store from '@/store';
import router from '@/router';
import create from '@/api/game/create';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Routes from '@/types/routes';

export default async function (userName: string) {
  const { data } = await create(userName);

  store.commit(mutations.INIT_GAME, { ...data, creatorId: data.userId });

  navigateTo(Routes.GameLobby);
}
