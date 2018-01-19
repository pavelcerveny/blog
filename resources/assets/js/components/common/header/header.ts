import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'HeaderComponent',
    template: require('./header.html'),
    style: require('./header.scss'),
    components: { }
})
export class HeaderComponent extends Vue {

    showLogin: boolean = false;
    showLogout: boolean = false;

    email: string;

    password: string;

    get emailModel () {
        return this.email;
    }

    set emailModel (value) {
        this.email = value;
    }

    get passwordModel () {
        return this.password;
    }

    set passwordModel (value) {
        this.password = value;
    }

    get errorMsg () {
        return this.$store.getters['auth/error'];
    }

    get userEmail () {
        return this.$store.getters['auth/email'];
    }

    showLoginComp() {
        this.showLogin = !this.showLogin;
    }

    login() {
        this.$store.dispatch('auth/logIn', { email: this.email, password: this.password });

        this.emailModel = '';
        this.passwordModel = '';
    }

    logout() {
        this.$store.dispatch('auth/logOut');
    }
}
