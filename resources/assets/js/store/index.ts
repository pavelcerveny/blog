import Vue from 'vue';
import Vuex from 'vuex';
import { newPost } from './newPost';
import { auth } from './auth';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        newPost,
        auth
    },
    plugins: []
});