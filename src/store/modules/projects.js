/* eslint-disable no-shadow, no-param-reassign */

import behance from '../../api/behance';
import * as types from '../mutation-types';

const retrievedProjects = localStorage.getItem('projects');

// initial state
const state = {
  all: retrievedProjects ? JSON.parse(retrievedProjects) : [],
  current: null,
};

// getters
const getters = {
  allProjects: state => state.all,
  currentProject: state => state.current,
};

// actions
const actions = {
  getAllProjects({ commit }) {
    behance.getProjects((projects) => {
      localStorage.setItem('projects', JSON.stringify(projects));

      commit(types.RECEIVE_PROJECTS, { projects });
    });
  },

  browseProject({ commit }, id) {
    commit(types.BROWSE_PROJECT, { id });
  },
};

// mutations
const mutations = {
  [types.RECEIVE_PROJECTS](state, { projects }) {
    state.all = projects;
  },

  [types.BROWSE_PROJECT](state, { id }) {
    const current = state.all.find(p => p.id == id); // eslint-disable-line eqeqeq

    state.current = current;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

/* eslint-enable no-shadow, no-param-reassign */
