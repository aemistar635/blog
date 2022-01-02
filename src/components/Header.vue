<template>
    <div class="header m-0 p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/user">
                    <img src="https://segwitz.com/wp-content/uploads/2021/01/web-and-mobile-app-company.png"
                         srcset="https://segwitz.com/wp-content/uploads/2021/01/web-and-mobile-app-company.png 1x, https://segwitz.com/wp-content/uploads/2021/01/web-and-mobile-app-company.png 2x"
                         width="180" height="25"
                         alt="SegWitz" class="logo logoDefault">
                </a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="text-align: left">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" @click="router.push('/')">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="router.push('/create-blog')">Create Post</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-success" type="submit" @click="logoutUser()">Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {useRouter} from "vue-router";
    import {mapActions} from "vuex";

    export default {
        name: "AuthenticatedHeader",
        props: {},
        data() {
            return {}
        },
        methods: {
            ...mapActions('user',['logoutUser'])
        },
        setup(){
            const router = useRouter();
            return {router};
        }
    }
</script>

<style scoped>
.nav-item{
    cursor:pointer;
}
</style>