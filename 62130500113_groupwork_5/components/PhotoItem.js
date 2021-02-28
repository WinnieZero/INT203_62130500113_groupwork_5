app.component("photo-items", {
    props: {
        task: Object,
    },
    template:
        /*html*/
        `
        <div class="border-blue-100 bg-gray-100 rounded-2xl mt-10 rounded-t-none">
                <ul>
                        <img v-bind:src="task.url" class="rounded-2xl rounded-t-none " v-on:click="toggleView(task)">
                        <div class="text-2xl text-center py-4">
                            {{task.title}}
                            <i v-show="!task.done " class="text-black transition duration-500 far fa-1x fa-heart"
                                @click="toggleDone(task)"></i>
                            <i v-show="task.done " class="text-red-500 transition duration-500 fas fa-1x fa-heart "
                                @click="toggleDone(task)"></i>
                        </div>        
                    </li>
                </ul>
        </div>
   `,
    methods: {
        toggleDone(task) {
            this.$emit("when-like", task);
            
        },
        toggleView(task) {
            this.$emit("when-toggleview",task);
        },
    }
});