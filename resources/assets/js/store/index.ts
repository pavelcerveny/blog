import Vue from 'vue';
import Vuex from 'vuex';
import { newPost } from './newPost'
import { blogPost } from './blogPost';
import { auth } from './auth';
import { posts } from './posts';
import { main } from './main';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        newPost,
        auth,
        blogPost,
        posts,
        main
    },
    plugins: []
});