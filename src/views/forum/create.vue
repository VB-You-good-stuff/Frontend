<template>
    <div>
        <div class="text-center mt-3">
            <h1>建立問題</h1>
        </div>
        <div class="mt-5">
            <div class="row">
                <label for="inputTitle" class="offset-sm-1  col-2 col-form-label text-center" style="line-height:39px">標題</label>
                <div class="col-10 col-sm-6">
                    <input type="text" class="form-control" id="inputTitle" v-model="title"/>
                </div>
            </div>
            <div class="row">
                <label for="inputContent" class="offset-sm-1 col-2 col-form-label text-center" style="line-height:39px">內容</label>
                <div class="col-10 col-sm-6">
                    <!-- <textarea type="text" rows="10" class="form-control" id="inputContent" v-model="content"/> -->
                    <tiptap :content="content" @update_content="update_content" />
                </div>
            </div>
        </div>
        <div class="mt-5 text-end">
            <button type="button" class="btn btn-success" @click="submit">發文</button>
        </div>
    </div>
</template>
<script>
import Tiptap from '../../components/Tiptap.vue'
export default {
    components: {
        Tiptap
    },
    data() {
        return {
            title:"",
            content:""
        }
    },
    mounted() {
         if (this.$store.getters.getToken == "") {
            this.$router.push("/")
        }
    },
    methods: {
        submit:function() {
            const data = {
                article:this.title,
                detail:this.content
            }
            this.$http.post('http://163.17.135.174:8082/api/guestbooks',data,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
            .then((data) =>{
                if (data.status == 200) {
                    this.$router.push("/forum")
                }
            });
        },
        update_content:function(content){
            this.content = content;
        }
    },
    watch: {
        content() {
        },
    },
}
</script>
<style>
    
</style>