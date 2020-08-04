import { ActionTree } from 'vuex';
import { State } from './SlowTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const actions: ActionTree<State, any> = {
  setSelectedPath({ commit }, selectedPath: string) {
    commit('setSelectedPath', selectedPath);
  },
};

export default actions;
