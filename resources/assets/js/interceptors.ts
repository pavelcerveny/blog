import { store } from "./store";
import axios from 'axios';

export default function interceptorSetup() {
    axios.interceptors.response.use((response) => {
        const newtoken = response.headers.authorization;
        console.log(`RESPONSE\n`);
        console.log(response);
        console.log('\n');

        if (newtoken){
            store.dispatch('auth/setToken', newtoken);
        }

        return response
    },  (error) => {
        console.log(`RESPONSE\n`);
        console.log(error);
        console.log('\n');
        switch (error.response.status) {
            case 401:
                // store.dispatch('auth/logOut');
                break;
            default:
                console.log(error.response)
        }
        return Promise.reject(error);
    });

    axios.interceptors.request.use(function(config) {
        const token = store.getters['auth/token'];
        if(token) {
            config.headers.Authorization = token;
        }
        console.log(`REQUEST:\n`);
        console.log(config);
        console.log('\n');

        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}
