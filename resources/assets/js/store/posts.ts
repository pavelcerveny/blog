import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { postsState, blogPostState } from '../types/types';
import { API } from "../api";

export const state: postsState = {
    posts: [],
    error: null,
};

export const getters: GetterTree<postsState, any> = {
    posts: state  => state.posts,
    error: state  => state.error,
};

export const mutations: MutationTree<postsState> = {
    setError: (state, value) => {
        state.error = value;
    },
    getPosts: (state, value) => {
        value.forEach(el => {
            let post: blogPostState = {
                author: el.author,
                content: el.content,
                title: el.title,
                titleImg: 'http://via.placeholder.com/1100x400',
                status: '',
                url: el.url,
                error: null
            };

            if (el.titleImg) {
                post.titleImg = el.titleImg;
            }

            state.posts = [...state.posts, post];
        });

        state.error = null;
    },
};

export const actions: ActionTree<postsState, any> = {

    async getPosts ({ commit }, payload) {
        try {
            const response = await API.getPosts(payload);
            if (response) {
                commit('getPosts', response);
            } else {
                commit('setError', response.toString());
            }


        } catch (e) {
            console.log(e);
            commit('setError', e.toString());
        }
    },
};

export const posts: Module<postsState, any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};