import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { HeaderComponent } from '../common/header';
import { FooterComponent } from '../common/footer';

@Component({
    name: 'AppComponent',
    template: require('./app.html'),
    style: require('./app.scss'),
    components: { headerNav: HeaderComponent, footerDown: FooterComponent }
})
export class AppComponent extends Vue {

}

Vue.component('app', AppComponent);