<template>
    <Header />
    <slot></slot>
</template>

<script>
    import {mapActions} from "vuex";
    import Header from "../../components/Header";
    import Slider from "../../components/Slider";

    export default {
        name: "layout",
        components: {Slider, Header},
        props: {},
        data() {
            return {}
        },
        methods: {
            ...mapActions('user',['logout']),
            logoutUser(){
                this.logout();
            }
        }
    }
</script>

<style scoped lang="scss">

</style>