export default {
    namespaced: true,
    state: {
        savePost: '',
        getAllPosts: [],
    },
    getters: {},
    mutations: {
        savePost(state,payload){
            state.savePost = payload
        },
        getAllPosts(state,payload){
            state.getAllPosts = payload;
        }
    },
    actions: {
        getAllPostsData({commit}){
             commit('getAllPosts', localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [])
        },
        postBlog({state,commit},payload){
            let postsData = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')):[];
            postsData.push(payload);
            localStorage.setItem('posts',JSON.stringify(postsData))
            // commit('savePost',payload)
        },
        addComment({state,commit},payload){
            let date = new Date().toLocaleDateString();
            let addComment =  state.getAllPosts[payload.pId];
            addComment['comments'].push({'date':date,'comment':payload.comment});
            state.getAllPosts.splice(payload.pId,1,addComment)
            localStorage.setItem('posts',JSON.stringify(state.getAllPosts));
        },
        deletePost({state,commit},payload){
            state.getAllPosts.splice(payload,1);
            commit('getAllPosts',state.getAllPosts)
            localStorage.setItem('posts', JSON.stringify(state.getAllPosts));
        }
    }
}