// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import { BlogComponent } from '../components/blog';
import { NewPostComponent } from '../components/newPost';
import { BlogPostComponent } from '../components/blogPost';

// Component routes


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Blog - ',
            component: BlogComponent
        },
        {
            path: '/addPost',
            name: 'Add post',
            component: NewPostComponent
        },
        {
            path: '/posts/:url',
            name: 'Blog post',
            component: BlogPostComponent
        }
    ],
    linkActiveClass: 'active'
})