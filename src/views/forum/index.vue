<template>
    <div>
        <div class="text-left">
            <router-link to="forum/create">
                <button type="button" class="btn btn-success">發文</button>
            </router-link>
        </div>
        <div class="card mt-5">
            <table class="table table-striped table-hover">
                <thead class="forum_header">
                    <th>類別</th>
                    <th>標題</th>
                    <th >發文者</th>
                    <th >發文時間</th>
                    <th >最後回覆時間</th>
                </thead>
                <tbody class="forum_body">
                    <tr class="article" v-for="article in articles" :key="article.id">
                        <td>提問</td>
                        <router-link :to="`forum/article/${article.id}`" class="title" tag="td">{{article.article}}</router-link>
                        <td class="user">{{article.name}}</td>
                        <td class="create_time">{{time_format(article.created_at)}}</td>
                        <td>{{time_format(article.last_content_time)}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            articles:[]
        }
    },
    created(){
        if (this.$store.getters.getToken == "") {
            this.$router.push("/")
        }
        const self = this;
        this.$http.get('http://163.17.135.174:8082/api/guestbooks',{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
        .then((data) =>{
            self.articles = data.data
            console.log(self.articles)
        });

    },
    methods: {
        time_format:function (dateString) {
            const date = new Date(dateString)
            const now = new Date()
            if (date.toLocaleDateString() == now.toLocaleDateString()) {
                return `今天 ${date.toLocaleTimeString()}`;
            }else{
                return date.toLocaleString();
            }
        }
    },
}
</script>
<style scoped>
    .forum_header > th{
        font-size:20px
    }
    @media (max-width:768px){
        .forum_header{
            display: none;
        }
        .user{
            display: none;
        }
        .create_time{
            display: none;
        }
        .article > td{
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
        .card{
            padding: 10px;
        }
    }
    
    .article > td{
        font-size:16px;
        color: black;
    }
    .title:hover{
        color:#0055aa;
        cursor: pointer;
    }
    table{
        --bs-table-hover-bg: #FFFFDD;
    }
    
    
</style>