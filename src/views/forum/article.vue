<template>
    <div>
        <div class="card mt-5  mb-5" v-for="floor in contents" :key="floor.floor">
            <div class="card-header">
				<div style="float:right;cursor: pointer;" v-if="IsLogin&&owner(floor.detail_account)">
					<v-icon color="#00ff00" title="修改" @click="edit_article(floor)">mdi-file-edit </v-icon>
					<v-icon color="#ff0000" title="刪除" @click="delete_article(floor)">mdi-delete </v-icon>
				</div>
				<h1 v-if="floor.floor == 1">{{article!=null?article.article:""}}</h1>
				<span>{{floor.floor}}樓 </span>
				<span>{{floor.name}}</span>
                
            </div>
            <div class="ProseMirror m-4" style="min-height:300px" v-html="floor.detail">
            </div>
            <div class="card-footer">
              <message :floor="floor" :content_id="floor.id" :IsLogin="IsLogin"/>
            </div>
        </div>
        <div class="card mb-5" v-if="IsLogin">
            <div class="card-header">
                回覆問題
            </div>
            <div class="">
                <Tiptap :content="content" @update_content="update_content"/>
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-success" @click="reply">送出</button>
            </div>
        </div>
        
    </div>
</template>
<script>
import Tiptap from '../../components/Tiptap.vue'
import message from '../../components/forum/message.vue'
export default {
	props:["IsLogin"],
	inject:['reload'],
    components: {
        Tiptap,
        message
    },
    data() {
        return {
            contents:null,
            article:null,
            content:"",
        }
    },
    created() {
        if (this.$store.getters.getToken == "") {
            // this.$router.push("/")
        }
        const self = this;
        this.$http.get('http://163.17.135.174:8082/api/contents',{params: { id: this.$route.params.id },headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
        .then((data) =>{
            self.contents = data.data
        });
        this.$http.get(`http://163.17.135.174:8082/api/guestbooks/${this.$route.params.id}`,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
        .then((data) =>{
			self.article = data.data
        });
    },
    methods: {
		reply:function(){
			const data ={
				id:this.$route.params.id,
				detail:this.content
			}
			this.$http.post('http://163.17.135.174:8082/api/contents',data,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
			.then((data) =>{
				if (data.status == 200) {
					this.reload();
				}
			});
		},
		update_content:function(content){
			this.content = content;
		},
		delete_article:function(article){
			if (article.floor == 1) {
				if(confirm("確認刪除此篇文章?")){
					
					const data ={
						id:this.$route.params.id,
					}  
					this.$http.delete('http://163.17.135.174:8082/api/guestbooks',{params: data,headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
					.then((data) =>{
						if (data.status == 200) {
							this.$router.push("/forum")
						}
					});
				}
				}else{
				if(confirm("確認刪除此回覆?")){
					const data ={
						id:article.id,
					}  
					this.$http.delete('http://163.17.135.174:8082/api/contents',{params: data,headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
					.then((data) =>{
						if (data.status == 200) {
							this.reload();
						}
					});
				}
			}
		},
		edit_article:function(article){
			if (article.floor == 1) {
				//修改文章
				this.$router.push(`/forum/article_edit/${this.$route.params.id}`)
			}else{
				this.$router.push(`/forum/content_edit/${article.id}`)
				//修改回覆
			}
		},
		owner:function (owner_account){
			const myaccount = this.$store.getters.getUserData.account;
			if (owner_account == myaccount) {
				return true
			}else{
				return false
			}
			
		}
    }
}
</script>

<style lang="scss">

/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  mark {
    background-color: #FAF594;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }
}
.ProseMirror:focus-visible{
    outline: -webkit-focus-ring-color auto 0px;
}
</style>