import { Module } from 'vuex';
import { ConnectionsState, StoreRootState } from '@/types/game';

export enum mutations {
  SET_CHANNELS = 'setChannels'
}

const connectionsStore: Module<ConnectionsState, StoreRootState> = {
  state: {
    presence: undefined,
    priv: undefined,
    channel: undefined,
  },

  getters: {
    presence: state => state.presence,
    priv: state => state.priv,
    channel: state => state.channel,
  },

  mutations: {
    [mutations.SET_CHANNELS](state, { channel, presence, priv }) {
      state.channel = channel;
      state.presence = presence;
      state.priv = priv;
    },
  },
};

export default connectionsStore;
