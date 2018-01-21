// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';
import { BlogComponent } from '../components/blog';
import { NewPostComponent } from '../components/newPost';
import { BlogPostComponent } from '../components/blogPost';
import { AboutComponent } from '../components/about';
import { FeedComponent } from '../components/feed';
import { CategoriesComponent } from '../components/categories';
// Component routes


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Blog',
            component: BlogComponent
        },
        {
            path: '/addPost',
            name: 'Add post',
            component: NewPostComponent
        },
        {
            path: '/about',
            name: 'About',
            component: AboutComponent
        },
        {
            path: '/feed',
            name: 'Feed',
            component: FeedComponent
        },
        {
            path: '/categories',
            name: 'Categories',
            component: CategoriesComponent
        },
        {
            path: '/posts/:url',
            name: 'Blog post',
            component: BlogPostComponent
        }
    ],
    linkActiveClass: 'active'
})