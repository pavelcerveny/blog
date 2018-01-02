import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { newPostState } from '../types/types';

export const state: newPostState = {
    text: 'Insert some blog post!',
    title: '',
    titleImg: '',
    author: 'admin',
    status: 'new'
};

export const getters: GetterTree<newPostState, any> = {
    text: state  => state.text,
    title: state  => state.title,
    titleImg: state  => state.titleImg,
    author: state  => state.author,
    status: state  => state.status,
};

export const mutations: MutationTree<newPostState> = {
    updateText: (state, value) => {
        state.text = value;
    },
    updateTitle: (state, value) => {
        state.title = value;
    },
    savePost: (state) => {
        state.text = '';
        state.title = '';
        state.titleImg = '';
    },
};

export const actions: ActionTree<newPostState, any> = {

    updateText: ({ commit }, payload) => {
        commit('updateText', payload);
    },
    updateTitle: ({ commit }, payload) => {
        commit('updateTitle', payload);
    },
    savePost: ({ commit }) => {
        commit('savePost');
    },
};

export const newPost: Module<newPostState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};