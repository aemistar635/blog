<template>
    <div class="col-12 mt-5" v-for="(post,k) in postsData" :key="k">
        <div class="card">
            <div class="d-flex p-3">
                <div class="flex-grow-1">{{post.date}}</div>
                <div class="text-right" v-if="currentUser? currentUser[0].id === post.userId :0">
                    <i class="mdi mdi-delete icon" @click="deletePost(k)"/>
                </div>
            </div>
            <div v-html="post.postData" class="postData"></div>
            <div class="p-3">
                <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse"
                        :data-bs-target="`#com${k}`" aria-expanded="false"
                        aria-controls="showComments">
                    Show Comments
                </button>
            </div>
            <div class="collapse" :id="'com'+k">
                <post-comment :p-id="k"/>
                <show-comments v-if="post.comments.length" :comments="post.comments"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import ShowComments from "./ShowComments";
    import PostComment from "./PostComment";

    export default {
        name: "ShowAllPostsData",
        components: {PostComment, ShowComments},
        props: {
            postsData: {
                type: Array,
            }
        },
        data() {
            return {
                comment: '',
            }
        },
        computed: {
            ...mapState('user', ['currentUser']),
        },
        methods: {
            ...mapActions('user', ['getUser']),
            ...mapActions('postEditor', ['deletePost']),

        },
        mounted() {
            this.getUser();
        }
    }
</script>

<style scoped>
    .icon{
        cursor:pointer;
    }
    .card >>> h1 {
        /*border: solid !important;*/
        margin-left: 1rem;
        padding: 10px !important;
    }

    .card >>> h2 {
        /*border: solid !important;*/
        margin-left: 1rem;
        padding: 10px !important;
    }

    .card >>> h3 {
        /*border: solid !important;*/
        margin-left: 1rem;
        padding: 10px !important;
    }

    .card >>> p {
        /*border: solid !important;*/
        margin-left: 1rem;
        padding: 10px !important;
    }

    .card >>> img {
        height: 250px
    }
</style>