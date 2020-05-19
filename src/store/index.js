import Vuex from 'vuex';
import Vue from 'vue';

import title from './modules/title';
// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    title
  }
});
