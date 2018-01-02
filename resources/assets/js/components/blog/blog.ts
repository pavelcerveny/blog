import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'BlogComponent',
    template: require('./blog.html'),
    style: require('./blog.scss'),
    components: { }
})
export class BlogComponent extends Vue {

}

Vue.component('blog', BlogComponent);