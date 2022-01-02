<template>
    <layout>
    <div class="container p-3">
        <h2>Create Post</h2>
        <Editor v-model="value" editorStyle="min-height: 320px"/>
        <button :disabled="!value" class="btn btn-primary btn-sm mt-2" @click="post()">Post</button>
    </div>
    </layout>
</template>


<script>
    import Layout from "../layout";
    import {mapActions,mapState} from "vuex";
    import {useRouter} from "vue-router";

    export default {
        name: "CreateBlog",
        components: {Layout,},
        props: {},
        data() {
            return {
                value:'',
            }
        },
        computed:{
            ...mapState('user',['currentUser'])
        },
        methods: {
            ...mapActions('postEditor',['postBlog']),
            post(){
                let date = new Date();
                let postDetail = {'userId':this.currentUser[0].id,'date':date.toLocaleDateString(),'postData':this.value,'comments':[]};
                this.postBlog(postDetail)
                this.router.push('/dashboard')
            }

        },
        setup(){
            const router = useRouter();
            return {
                router,
            }
        }
    }
</script>

<style scoped >

</style>