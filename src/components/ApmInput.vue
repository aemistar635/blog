<template>
    <div class="mb-2" style="text-align: left;">
    <label class="form-label">{{label?label:''}}</label>
    <input v-if="type!=='password'" :type="type" class="form-control" :placeholder="placeholder" aria-label=""/>
    <div class="input-group" v-if="type==='password'">
        <input type="password" class="form-control" aria-label="">
        <span class="input-group-text">icon</span>
<!--        <i class="mdi mdi-format-align-left"   />-->
    </div>
    </div>
</template>

<script>
    export default {
        name: "ApmInput",
        props: {
            label: {
                type: String,
                default: '',
            },
            placeholder: {
                type: String,
                default: '',
            },
            type:{
                type:String,
                default:'text',
            }
        },
        data() {
            return {}
        },
        methods: {},
        setup(){
            // this.$emit('update:modelValue')
        }
    }
</script>

<style scoped lang="scss">

</style>