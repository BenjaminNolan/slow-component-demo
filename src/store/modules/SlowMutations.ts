import { MutationTree } from 'vuex';
import { State } from './SlowTypes';

const mutations: MutationTree<State> = {
  setSelectedPath(state: State, selectedPath: string): void {
    state.selectedPath = selectedPath;
  },
};

export default mutations;
