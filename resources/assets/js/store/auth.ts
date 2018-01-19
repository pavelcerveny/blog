import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { authState} from '../types/types';
import { API } from '../api';

export const state: authState = {
    userID: 0,
    email: '',
    token: '',
};

export const getters: GetterTree<authState, any> = {
    userID: state  => state.userID,
    email: state  => state.email,
    token: state  => state.token,
};

export const mutations: MutationTree<authState> = {
    setToken: (state, value) => {
        state.token = value;
    },
    logOut: (state) => {
        state.userID = 0;
        state.email = '';
        state.token = '';
    },
    logIn: (state, value) => {
        state.userID = value.id;
        state.email = value.email;
    },
};

export const actions: ActionTree<authState, any> = {

    setToken: ({ commit }, payload) => {
        commit('setToken', payload);
    },
    async logOut ({ commit }) {
        try {
            const response = await API.logOut();
            console.log(response);
            if (response.message == 'success') {
                commit('logOut');
            }

        } catch (e) {
            console.log(e);
        }

    },
    async logIn ({ commit }, payload) {
        try {
            const response = await API.login(payload);
            commit('setToken', response.token);
            commit('logIn', response.user);

        } catch (e) {
            console.log(e);
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