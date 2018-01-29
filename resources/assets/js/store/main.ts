import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { mainState } from '../types/types';

const base: mainState = {
    loading: false,
    error: null,
};

export const state: mainState = {
    loading: true,
    error: null,
};

export const getters: GetterTree<mainState, any> = {
    loading: state  => state.loading,
    error: state  => state.error,
};

export const mutations: MutationTree<mainState> = {
    setError: (state, value) => {
        state.error = value;
    },
    clearState: (state) => {
        state = base;
    },
    setLoading: (state, value) => {
        state.loading = value;
    }
};

export const actions: ActionTree<mainState, any> = {

    loading: ({ commit }, payload) => {
        commit('setLoading', payload);
    },
};

export const main: Module<mainState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};