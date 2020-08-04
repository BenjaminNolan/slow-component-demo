import { GetterTree } from 'vuex';
import { State } from './SlowTypes';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getters: GetterTree<State, any> = {
  getSelectedPath: ({ selectedPath }): string => selectedPath,
};

export default getters;
