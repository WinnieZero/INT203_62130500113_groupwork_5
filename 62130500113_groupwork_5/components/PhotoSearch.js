app.component('photo-search', {
    props: {
        form: Object
    },
    template:
        /*html*/
        `
    <div class="flex justify-center py-4 mr-10">
    <span :class="{'hidden' : form.search }"><i class="fas fa-search mr-10 px-4 py-1" @click="search"></i></span>
    <span :class="{'hidden' : !form.search}">
        <input class="px-2 border-2 border-white mx-2 text-black" placeholder="Search Picture"
            v-model="form.text">
        <button class="mx-2 rouned text-white px-4 py-1 bg-red-500" @click="cancel">Cancel</button>
    </span>
    </div>
    `,
    data() {

    },
    methods: {

        search() {
            this.form.search = !this.form.search;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        }

    }
})