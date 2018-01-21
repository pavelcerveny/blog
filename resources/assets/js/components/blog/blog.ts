import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'BlogComponent',
    template: require('./blog.html'),
    style: require('./blog.scss'),
    components: { }
})
export class BlogComponent extends Vue {
    mounted () {
        if (this.$store.getters['posts/posts'].length === 0) {
            this.$store.dispatch('posts/getPosts');
        }

    }
    get posts () {
        return this.$store.getters['posts/posts'];
    }
    createPreview(text: string) {
        const maxLength = 250; // maximum number of characters to extract

        let trimmedText = text.substr(0, maxLength);
        return trimmedText.substr(0, Math.min(trimmedText.length, trimmedText.lastIndexOf(" ")))
    }
    createUrl(url: string) {
        return `/posts/${url}`;
    }
}

Vue.component('blog', BlogComponent);