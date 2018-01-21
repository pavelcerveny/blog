import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'AboutComponent',
    template: require('./about.html'),
    style: require('./about.scss'),
    components: { }
})
export class AboutComponent extends Vue {

}

Vue.component('about', AboutComponent);