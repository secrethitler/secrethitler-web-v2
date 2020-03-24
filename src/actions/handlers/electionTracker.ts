import { ElectionTracker } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function (event: ElectionTracker) {
  store.commit(mutations.INC_ELECTION_TRACKER);
}
