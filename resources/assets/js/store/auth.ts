import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { authState} from '../types/types';
import { API } from '../api';

export const state: authState = {
    userID: 0,
    email: '',
    token: '',
    error: null
};

export const getters: GetterTree<authState, any> = {
    userID: state  => state.userID,
    email: state  => state.email,
    token: state  => state.token,
    error: state  => state.error,
};

export const mutations: MutationTree<authState> = {
    setToken: (state, value) => {
        state.token = value;
    },
    setError: (state, value) => {
        state.error = value;
    },
    logOut: (state) => {
        state.userID = 0;
        state.email = '';
        state.token = '';
        state.error = null;
    },
    logIn: (state, value) => {
        state.userID = value.id;
        state.email = value.email;
        state.error = null;
    },
};

export const actions: ActionTree<authState, any> = {

    setToken: ({ commit }, payload) => {
        commit('setToken', payload);
    },
    setError: ({ commit }, payload) => {
        commit('setError', payload);
    },
    async logOut ({ commit }) {
        try {
            const response = await API.logOut();
            if (response.message == 'success') {
                commit('logOut');
            } else {
                commit('setError', response.toString());
            }

        } catch (e) {
            console.log(e);
            commit('setError', e.toString());
        }

    },
    async logIn ({ commit }, payload) {
        try {
            const response = await API.login(payload);

            if (response.token) {
                commit('setToken', response.token);
                commit('logIn', response.user);
            } else {
                commit('setError', response.toString());
            }

        } catch (e) {
            console.log(e);
            commit('setError', e.toString());
        }
    },
};

export const auth: Module<authState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};