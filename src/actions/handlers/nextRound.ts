import { NextRound } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: NextRound) {
  store.commit(mutations.SET_NEXT_ROUND, event.presidentId);
}
