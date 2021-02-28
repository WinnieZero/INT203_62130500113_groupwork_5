  const app = Vue.createApp({
    data() {
        return {
            image: [{
                    no: 0,
                    url:"images/Hitokage.png" , title: "Hitokage",done: false,
                },
                {
                    no: 1,
                    url:"images/Senikame.png" , title: "Senikame", done: false,
                },

                {
                    no: 2,
                    url:"images/Fushigidane.png" , title: "Fushigidane", done: false,
                }
                
            ],
            // input text
            form: {
                text: "",
                search: false,
            },
            selectview: false,
            selectImg: "",
        };
    },
    methods: {
        toggleDone(image) {
            this.image[image.no].done = !this.image[image.no].done;
        },
        search() {
            this.form.search = !this.form.search;
        },

        // viewimg
        toggleView(image) {
            console.log(image);
            this.selectImg = this.image[image.no].url;
            this.selectview = true;
        },

        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },

        close() {
            this.selectview = false;
        }

    },
    computed: {
        // countlikepicture
        countUndone() {
            return this.image.filter((t) => t.done).length;
        },
        //search
        searching() {
            return this.image.filter((member) => {
                return member.title.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    },
})

