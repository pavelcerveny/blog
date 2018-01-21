import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { newPostState } from '../types/types';
import { API } from "../api";

const base: newPostState = {
    content: '',
    title: '',
    titleImg: 'http://via.placeholder.com/1100x400',
    author: '',
    status: '',
    error: null,
};

export const state: newPostState = {
    content: '',
    title: '',
    titleImg: 'http://via.placeholder.com/1100x400',
    author: '',
    status: '',
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
    setError: (state, value) => {
        state.error = value;
    },
    clearState: (state) => {
        state = base;
    },
    getPost: (state, value) => {
        state.author = value.author;
        state.content = value.content;
        state.title = value.title;
        state.titleImg = value.titleImg ? value.titleImg : 'http://via.placeholder.com/1100x400';
        state.error = null;
    },
};

export const actions: ActionTree<newPostState, any> = {

    async getPost ({ commit }, payload) {
        try {
            const response = await API.getPost(payload);

            if (!response.title) {
                commit('setError', response.toString());
            } else {
                commit('clearState');
                commit('getPost', response);
            }

        } catch (e) {
            console.log(e);
            commit('setError', e.toString());
        }
    },
};

export const blogPost: Module<newPostState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};