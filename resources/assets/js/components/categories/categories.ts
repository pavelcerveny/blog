import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'CategoriesComponent',
    template: require('./categories.html'),
    style: require('./categories.scss'),
    components: { }
})
export class CategoriesComponent extends Vue {

    beforeCreate() {
        this.$store.dispatch('main/loading', true);
    }

    mounted() {
        this.$store.dispatch('main/loading', false);
    }
}

Vue.component('categories', CategoriesComponent);