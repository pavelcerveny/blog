import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'HeaderComponent',
    template: require('./header.html'),
    style: require('./header.scss'),
    components: { }
})
export class HeaderComponent extends Vue {

    loginComponent: string = 'none';

    loginCompStyle: string = 'width:100px;height:100px;border: 1px solid #636b6f';

    login() {

        this.loginComponent = this.loginComponent == 'none' ? 'block' : 'none';
    }
}
