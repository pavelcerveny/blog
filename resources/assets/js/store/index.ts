import Vue from 'vue';
import Vuex from 'vuex';
import { newPost } from './newPost';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        newPost
    },
    plugins: []
});