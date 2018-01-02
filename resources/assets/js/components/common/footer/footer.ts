import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    name: 'FooterComponent',
    template: require('./footer.html'),
    style: require('./footer.scss'),
    components: { }
})
export class FooterComponent extends Vue {

}
