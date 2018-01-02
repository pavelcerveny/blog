import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    name: 'TinyMCEComponent',
    template: require('./tinyMCE.html'),
    style: require('./tinyMCE.scss'),
    components: { }
})
export class TinyMCEComponent extends Vue {

    @Prop({ default: 'editor' })
    id: { type: string; };

    @Prop({ default: '' })
    value: { type: string; };

    @Prop({ default: '' })
    toolbar: { type: any; };

    @Prop({ default: true })
    menubar: { type: boolean; };

    @Prop({ default: '' })
    otherProps: { type: any; };

    @Prop({ default: '' })
    baseURL: { type: string; };

    @Prop({ default: '' })
    content: { type: string; };

    @Prop({ default: () => [
        'advlist autolink lists link image charmap print preview anchor textcolor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'] })
    plugins: { type: [ string ]; };

    @Prop({ default: () => [
            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
            '//www.tinymce.com/css/codepen.min.css'] })
    content_css: { type: [ string ]; };

    @Watch('content')
    onPropertyChanged(value: string, oldValue: string) {
        if (value.length === 0) {
            window.tinymce.get(this.id).setContent(value);
        }
    }


    mounted () {
        window.tinymce.baseURL = this.baseURL;
        window.tinymce.init({
            selector: `#${this.id}`,
            toolbar : this.toolbar,
            menubar : this.menubar,
            plugins: this.plugins,
            content_css: this.content_css,
            init_instance_callback: (editor) => {
                editor.on('KeyUp', (e) => {
                    this.$emit('input', editor.getContent());
                    console.log(this);
                });

                editor.on('Change', (e) => {
                    this.$emit('input', editor.getContent());
                });

                editor.setContent(this.value);
            },
            ...this.otherProps
        })
    }

    destroyed () {
        window.tinymce.get(this.id).destroy();
    }
}

Vue.component('tinyMCE', TinyMCEComponent);

