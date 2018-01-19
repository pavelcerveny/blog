import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { TinyMCEComponent } from '../common/tinyMCE';
import { Getter, namespace } from 'vuex-class';

const NewPostGetter = namespace('newPost', Getter);

@Component({
    name: 'NewPostComponent',
    template: require('./newPost.html'),
    style: require('./newPost.scss'),
    components: { TinyMCEComponent }
})
export class NewPostComponent extends Vue {

    images: Array<object> = [];

    get descriptionModel () {
        return this.$store.getters['newPost/content'];
    }

    set descriptionModel (value) {
        this.$store.dispatch('newPost/updateContent', value);
    }

    get postTitle () {
        return this.$store.getters['newPost/title'];
    }

    set postTitle (value) {
        this.$store.dispatch('newPost/updateTitle', value);
    }

    savePost() {
        let data = {
            title: this.postTitle,
            content: this.descriptionModel
        };
        this.$store.dispatch('newPost/savePost', data);
    }

    onFileChange(e: any): void {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    }
    createImage(file: any) {
        const reader: FileReader = new FileReader();

        reader.onload = (e: Event) => {
            this.images.push({data: reader.result, title: file.name});
        };
        reader.readAsDataURL(file);
    }
}

Vue.component('newPost', NewPostComponent);