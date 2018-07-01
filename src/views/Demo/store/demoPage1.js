import { queryList } from '../service';

export default {
  namespaced: true,
  state: {
    count: 0,
    list: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementStep(state, payload) {
      state.count += payload.step;
    },
    setList(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    incrementStepAsync({ commit }, payload) {
      setTimeout(() => {
        console.log(payload);
        commit('incrementStep', payload);
      }, 1000);
    },
    async queryListAsync({ commit }) {
      const response = await queryList();
      if (response.code === 0) {
        commit('setList', response.data);
      }
    },
  },
};
