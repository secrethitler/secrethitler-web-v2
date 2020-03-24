import Vue from 'vue';
import Vuex from 'vuex';

import { StoreRootState } from '@/types/game';
import game from './game';
import connections from './connections';

Vue.use(Vuex);

export default new Vuex.Store<StoreRootState>({
  strict: true,

  modules: {
    game,
    connections,
  },
});
