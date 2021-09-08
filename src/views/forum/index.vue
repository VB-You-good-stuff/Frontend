<template>
    <div>
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
                    <tr class="article">
                        <td>提問</td>
                        <router-link to="article" class="title" tag="td">請問這段程式碼出了什麼問題</router-link>
                        <td class="user">李柏賢</td>
                        <td class="create_time">今天 12:00</td>
                        <td>今天 12:20</td>
                    </tr>
                    <tr class="article">
                        <td>心得</td>
                        <td class="title">關於中斷點的使用</td>
                        <td class="user">李柏賢</td>
                        <td class="create_time">今天 11:00</td>
                        <td>今天 12:10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    
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