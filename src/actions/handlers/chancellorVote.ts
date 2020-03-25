import { ChancellorVote } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: ChancellorVote) {
  store.commit(mutations.ADD_VOTE, event);
}
