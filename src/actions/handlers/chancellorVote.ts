import { ChancellorNominated } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: ChancellorNominated) {
  store.commit(mutations.SET_NOMINATED_CHANCELLOR, event.chancellorId);
}
