<template>
    <div class="p-2 mt-1" v-for="(com,index) in comments" :key="index">
        <div class="card card-body">
            <div class="ml-2 p-2 small-text">{{com.date}}</div>
            <div class="comment small-text">
                {{com.comment}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShowComments",
        props: {
            comments:{
                type:Array,
            }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

</style>