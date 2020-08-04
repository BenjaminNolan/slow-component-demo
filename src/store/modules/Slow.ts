import mutations from './SlowMutations';
import actions from './SlowActions';
import getters from './SlowGetters';

import { State } from './SlowTypes';

export const state: State = {
  selectedPath: '',
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
