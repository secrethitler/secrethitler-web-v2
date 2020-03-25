import { ChancellorNominated } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';
import navigateTo from '@/utils/navigateTo';
import Route from '@/types/route';

export default function (event: ChancellorNominated) {
  store.commit(mutations.SET_NOMINATED_CHANCELLOR, event.chancellorId);

  navigateTo(Route.GameVote);
}
