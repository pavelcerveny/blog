import axios from 'axios';
import { store } from './store';

export class API {

    public static endpoint: string = "http://localhost:8000/api";

    static login(data: {email: string, password: string}): any {
        const endpoint = `${API.endpoint}/user/login`;

        return axios.post(endpoint, data)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static me(): any {
        const endpoint = `${API.endpoint}/user/me`;

        return axios.get(endpoint)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static logOut(): any {
        const endpoint = `${API.endpoint}/user/logout`;

        return axios.get(endpoint)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static imageUpload(file: File) {
        let data: FormData = new FormData();
        data.append('file', file);

        const endpoint = `${API.endpoint}/upload/image`;

        return axios.post(endpoint, data)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static getImages() {
        const endpoint = `${API.endpoint}/images`;
        return axios.get(endpoint)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static addPost(data): any {
        const endpoint = `${API.endpoint}/user/addPost`;

        return axios.post(endpoint, data)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }

    static getPost(url): any {
        const endpoint = `${API.endpoint}/posts/${url}`;

        return axios.get(endpoint)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }
    static getPosts(limit = 5): any {
        const endpoint = `${API.endpoint}/posts/${limit}`;

        return axios.get(endpoint)
            .then(function (res) {
                return res.data;
            })
            .catch(function (err) {
                return err;
            });
    }
}

