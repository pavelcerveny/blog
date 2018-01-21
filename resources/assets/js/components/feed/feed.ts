import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'FeedComponent',
    template: require('./feed.html'),
    style: require('./feed.scss'),
    components: { }
})
export class FeedComponent extends Vue {

}

Vue.component('feed', FeedComponent);