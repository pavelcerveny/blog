import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'CategoriesComponent',
    template: require('./categories.html'),
    style: require('./categories.scss'),
    components: { }
})
export class CategoriesComponent extends Vue {

}

Vue.component('categories', CategoriesComponent);