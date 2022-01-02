import router from "../router";

export default {
    namespaced: true,
    state: {
        currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        registerUsersList: [
            {id: 1, full_name: 'Alia', email: 'a@g.com', password: '123456'},
            {id: 2, full_name: 'Ahmed', email: 'b@g.com', password: '123456'},
            {id: 3, full_name: 'Alex', email: 'c@g.com', password: '123456'},
        ],
        loginError: null,
    },
    getters: {
        loginError: state => state.loginError,
    },
    mutations: {
        setError(state, payload) {
            state.loginError = payload;
        },
        setUser(state, payload) {
            state.currentUser = payload;
        },
        registerUser(state, payload) {
            state.registerUsersList.push(payload)
        }
    },
    actions: {
        getUser({commit}) {
            commit('setUser', localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
        },
        login({state, commit}, payload) {
            let userExist = state.registerUsersList.filter((item) => {
                if (item.email === payload.email && item.password === payload.password) return item
            });
            if (userExist.length) {
                localStorage.setItem('user', JSON.stringify(userExist));
                router.replace('/dashboard');
            } else {
                commit('setError', 'Your login credentials wrong')
            }
        },
        registration({commit}, payload) {
            commit('registerUser', payload)
        },
        logoutUser({state, commit}, payload) {
            localStorage.removeItem('user');
            // localStorage.removeItem('posts');
            router.push('/user')
        }
    }
}