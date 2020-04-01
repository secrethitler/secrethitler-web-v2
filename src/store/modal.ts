import { Module } from 'vuex';
import { StoreRootState } from '@/types/game';

export type ModalState = {
  activeModal?: string
}

export enum mutations {
  SET_ACTIVE_MODAL = 'setActiveModal'
}

const modal: Module<ModalState, StoreRootState> = {
  state: {
    activeModal: undefined,
  },

  mutations: {
    [mutations.SET_ACTIVE_MODAL](state, modalName: string) {
      state.activeModal = modalName;
    },
  },

  getters: {
    activeModal: (state) => state.activeModal,
  },
};

export default modal;
