import store from '@/store';
import { mutations } from '@/store/game';

const membersChanged = () => {
  const { presence } = store.getters;
  const { members } = presence;

  store.commit(mutations.SET_MEMBERS, members);
};

export default membersChanged;
