import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'HeaderComponent',
    template: require('./header.html'),
    style: require('./header.scss'),
    components: { }
})
export class HeaderComponent extends Vue {

}
