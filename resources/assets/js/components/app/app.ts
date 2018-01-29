import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { HeaderComponent } from '../common/header';
import { FooterComponent } from '../common/footer';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

@Component({
    name: 'AppComponent',
    template: require('./app.html'),
    style: require('./app.scss'),
    components: { headerNav: HeaderComponent, footerDown: FooterComponent, ClipLoader }
})
export class AppComponent extends Vue {

    get isLoading () {
        return this.$store.getters['main/loading'];
    }
}

Vue.component('app', AppComponent);