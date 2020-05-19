import axios from 'axios';

const state = {
  title: 'Gateway'
};

const getters = {
  getTitle:state=>state.title
};

const actions = {
  async addTitle({ commit }, title) {
    console.log(title)

    commit('newTitile', title);
  },
};

const mutations = {
  newTitile: (state, title1) => (state.title = title1),
};

export default {
  state,
  getters,
  actions,
  mutations
};
