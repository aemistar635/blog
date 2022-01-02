<template>
    <auth-layout>
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <h2 class="my-3 text-center">Login</h2>
                <form>
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
                        <div class="flex-grow-1 d-flex justify-content-start" >
                            <button :disabled="!form.email || !form.password" type="button" class="btn btn-primary btn-sm align-items-start" @click="loginUser">
                                Login
                            </button>
                        </div>
                        <div class="flex-grow-1 d-flex justify-content-end" >
                            <button type="button" class="btn btn-primary btn-sm align-items-end"
                                    @click="$router.push('/user/register')">Create Account
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

    export default {
        name: "Login",
        components: {ApmInput, AuthLayout},
        props: {},
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            ...mapState('user', ['registerUsersList', 'loginError']),
            ...mapGetters('user', ['loginError']),
        },
        methods: {
            ...mapActions('user', ['login']),
            ...mapMutations('user', ['setError']),
            loginUser() {
                this.login(this.form)
                // localStorage.setItem('user', JSON.stringify({name: 'amir', id: 12}));
                // router.replace('/dashboard');
            }
        },
        watch: {
            loginError(val) {
                if (val != null) {
                    this.$toast.error(val);
                    this.setError(null);
                }
            }
        }

    }
</script>

<style scoped lang="scss">

</style>