import Vue from 'vue';
import Vuex from 'vuex';
import { newPost } from './newPost'
import { blogPost } from './blogPost';
import { auth } from './auth';
import { posts } from './posts';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    mutations: {},
    modules: {
        newPost,
        auth,
        blogPost,
        posts
    },
    plugins: []
});