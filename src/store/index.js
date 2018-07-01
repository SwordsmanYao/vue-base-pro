import Vue from 'vue';
import Vuex from 'vuex';
import global from './global';
import { store as demo } from '../views/Demo';

Vue.use(Vuex);

export default new Vuex.Store({
  // use strict mode
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    global,
    demo,
  },
});
