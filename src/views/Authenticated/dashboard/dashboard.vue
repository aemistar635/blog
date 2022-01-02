<template>
    <layout>
        <Slider/>
        <h1 class="mt-5 text-center my-5">Blog</h1>
        <div class="show-posts mb-4">
            <div class="container px-4">
                <div class="row gx-5">
                    <ShowAllPostsData v-if="getAllPosts" :posts-data="getAllPosts"/>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from "../layout";
    import Slider from "../../../components/Slider";
    import {mapState,mapActions} from "vuex";
    import ShowAllPostsData from "../../../components/ShowAllPostsData";

    export default {
        name: "dashboard",
        components: {ShowAllPostsData, Slider, Layout},
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapState('postEditor', ['getAllPosts']),
        },
        methods: {
            ...mapActions('postEditor',['getAllPostsData'])
        },
        beforeMount() {
            this.getAllPostsData()
        }
    }
</script>

<style scoped>
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