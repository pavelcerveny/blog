import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { newPostState } from '../types/types';
import { API } from "../api";

export const state: newPostState = {
    content: 'Insert some blog post!',
    title: '',
    titleImg: '',
    author: 'admin',
    status: 'new',
    error: null,
};

export const getters: GetterTree<newPostState, any> = {
    content: state  => state.content,
    title: state  => state.title,
    titleImg: state  => state.titleImg,
    author: state  => state.author,
    status: state  => state.status,
    error: state  => state.error,
};

export const mutations: MutationTree<newPostState> = {
    updateContent: (state, value) => {
        state.content = value;
    },
    updateTitle: (state, value) => {
        state.title = value;
    },
    setError: (state, value) => {
        state.error = value;
    },
    savePost: (state) => {
        state.content = '';
        state.title = '';
        state.titleImg = '';
        state.error = null;
    },
};

export const actions: ActionTree<newPostState, any> = {

    updateContent: ({ commit }, payload) => {
        commit('updateContent', payload);
    },
    updateTitle: ({ commit }, payload) => {
        commit('updateTitle', payload);
    },
    async savePost ({ commit }, payload) {
        try {
            const response = await API.addPost(payload);

            if (!response.title) {
                commit('setError', response.toString());
            } else {
                commit('savePost');
            }

        } catch (e) {
            console.log(e);
            commit('setError', e.toString());
        }
    },
};

export const newPost: Module<newPostState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};