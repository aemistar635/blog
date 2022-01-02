export default (to, from, next) => {
    if (localStorage.getItem('user') !== null ) {
        next('/dashboard');
    } else {
        next()
    }
}