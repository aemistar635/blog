<template>
    <div class="container-fluid bg">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "AuthLayout",
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    .bg {
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    }
</style>