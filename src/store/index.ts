import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import { StoreRootState, GameState } from '@/types/game';
import game from './game';
import modal from './modal';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<GameState>({
  storage: window.localStorage,
});

export default new Vuex.Store<GameState>({
  strict: true,

  modules: {
    game,
    modal,
    // connections,
  },

  plugins: [vuexLocal.plugin],
});
