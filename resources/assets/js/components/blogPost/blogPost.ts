import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'BlogPostComponent',
    template: require('./blogPost.html'),
    style: require('./blogPost.scss'),
    components: { }
})
export class BlogPostComponent extends Vue {

    mounted () {
        const patt = new RegExp("[A-Za-z0-9-]+");

        if (patt.test(this.$route.params.url)) {
            this.$store.dispatch('blogPost/getPost', this.$route.params.url);
        }
    }
    get postTitle () {
        return this.$store.getters['blogPost/title'];
    }
    get postContent () {
        return this.$store.getters['blogPost/content'];
    }
    get postTitleImg () {
        return this.$store.getters['blogPost/titleImg'];
    }
}

Vue.component('blogPost', BlogPostComponent);