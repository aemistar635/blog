<template>
    <div style="height:400px"
         class="d-flex align-items-center justify-content-center full-height d-flex flex-column ion-justify-content-center ion-align-items-center">
        <div class="text-center d-flex flex-column">
            <div class="text-large">404</div>
            <div>
                THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST
                <a class="text-primary back" @click="$router.push('/')">back</a>
            </div>
        </div>
        <!--        <img src="https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" style="max-height:600px">-->
    </div>
</template>

<script>
    export default {
        name: "404",
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>
    .text-large {
        font-size: 100px;
        font-weight: 800;
    }

    .back {
        cursor: pointer;
    }
</style>
