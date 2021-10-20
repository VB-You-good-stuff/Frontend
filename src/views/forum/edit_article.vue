<template>
    <div>
        <div class="text-center mt-3">
            <h1>修改文章</h1>
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
                    <tiptap :content="content" @update_content="update_content" />
                </div>
            </div>
        </div>
        <div class="mt-5 text-end">
            <button type="button" class="btn btn-success me-3" @click="submit">修改</button>
            <button type="button" class="btn btn-warning " @click="$router.push(`/forum/article/${$route.params.id}`)">返回</button>
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
            content_id:"",
            content:""
        }
    },
    mounted(){
        this.$http.get(`http://163.17.135.174:8082/api/guestbooks/${this.$route.params.id}`,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
        .then((data) =>{
            if (data.status == 200) {
                this.title =  data.data.article

                this.$http.get(`http://163.17.135.174:8082/api/contents/${data.data.content_id}`,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
                .then((data) =>{
                    if (data.status == 200) {
                        this.content =  data.data[0].detail
                    }
                });
            }
        });
        
    },
    methods: {
        submit:function() {
            const data = {
                id:this.$route.params.id,
                article:this.title,
                content:this.content,
            }
            this.$http.put('http://163.17.135.174:8082/api/guestbooks',data,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
            .then((data) =>{
                if (data.status == 200) {
                    this.$router.push(`/forum/article/${this.$route.params.id}`)
                }
            });
        },
        update_content:function(content){
            this.content = content;
        }
    },
}
</script>