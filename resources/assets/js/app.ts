// Vue
import Vue from 'vue';

// Vuex
import { sync } from 'vuex-router-sync';
import { store } from './store';

// Router
import router from './router/router';

// Vuex router sync
sync(store, router);

// Components
import { AppComponent } from './components/app';

// Styles
// import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import '../sass/app.scss';

// Setup
Vue.config.productionTip = false;


// Vue init
new Vue({
    el: "#app",
    router,
    store,
    components: {
        AppComponent
    }
});
