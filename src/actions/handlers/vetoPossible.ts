import { VetoPossible } from '@/types/events';
import store from '@/store';
import { mutations } from '@/store/game';

export default function vetoPossible(event: VetoPossible) {
  store.commit(mutations.SET_VETO_POSSIBLE);
}
