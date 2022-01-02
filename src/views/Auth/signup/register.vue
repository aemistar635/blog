<template>
    <auth-layout>
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h2 class="my-3 text-center">Registration</h2>
                <form>
                    <div class="mb-2" style="text-align: left;">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Enter Full Name"
                               aria-label="" v-model="form.full_name"/>
                    </div>
                    <div class="mb-2" style="text-align: left;">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email"
                               aria-label="" v-model="form.email"/>
                    </div>
                    <div class="mb-2" style="text-align: left;">
                        <label class="form-label">Password</label>
                        <div class="input-group">
                            <input type="password" class="form-control" placeholder="Enter Password" aria-label=""
                                   v-model="form.password">
                            <span class="input-group-text">
                                <i class="mdi mdi-lock"/>
                            </span>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="flex-grow-1 d-flex justify-content-start">
                            <button :disabled="!form.full_name || !form.email || !form.password" type="button" class="btn btn-primary btn-sm align-items-start"
                                    @click="registerUser">
                                Signup
                            </button>
                        </div>
                        <div class="flex-grow-1 d-flex justify-content-end">
                            <button type="button" class="btn btn-primary btn-sm align-items-end"
                                    @click="$router.push('/user/login')">Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </auth-layout>
</template>

<script>
    import AuthLayout from "../authLayout";
    import ApmInput from "../../../components/ApmInput";
    import {mapState, mapActions, mapGetters, mapMutations} from "vuex";
    import {useRouter} from "vue-router";

    export default {
        name: "Register",
        components: {ApmInput, AuthLayout},
        props: {},
        data() {
            return {
                form: {
                    id: Math.random(),
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapState('user', ['registerUsersList']),
        },
        methods: {
            ...mapActions('user', ['registration']),
            registerUser() {
                if (!this.registerUsersList.filter((item) => {if(item.email === this.form.email) return item}).length) {
                    this.registration(this.form);
                    this.$toast.success('User Register Successfully');
                    this.$router.push('/user/login')
                } else {
                    this.$toast.error('This email already exist');
                }
            }
        },
        setup() {
            const router = useRouter();
            return {
                router,
            }
        }
    }
</script>

<style scoped lang="scss">

</style>