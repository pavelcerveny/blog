import Vue from 'vue';

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        style?: any;
    }
}

declare global  {
    interface Window {
        tinymce: any;
    }
}
