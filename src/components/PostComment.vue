<template>
    <div class="p-4">
        <div>
            <textarea class="form-control" placeholder="Leave a comment here..."
                      v-model="comment"/>
        </div>
        <button :disabled="!comment" class="btn btn-primary btn-sm mt-3"
                @click="addComm({'pId': pId, 'comment': comment})">Comment
        </button>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "PostComment",
        props: {
            pId: '',
        },
        data() {
            return {
                comment: ''
            }
        },
        methods: {
            ...mapActions('postEditor', ['addComment']),
            addComm(value) {
                this.addComment(value);
                this.comment = '';
            }
        },
    }
</script>

<style scoped lang="scss">

</style>