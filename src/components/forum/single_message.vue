<template>
    <div v-if="!isEdit">
        <div style="float:right;cursor: pointer;" v-if="IsLogin&&owner(message.reply_account)">
            <v-icon color="#00ff00" title="修改" @click="edit_message_start(message)">mdi-file-edit </v-icon>
            <v-icon color="#ff0000" title="刪除" @click="delete_message(message)">mdi-delete </v-icon>
        </div >
        {{message.name }}:{{message.reply}}
    </div>
    <div v-else>
        <div class="input-group input-group-sm" v-if="IsLogin">
            <span class="input-group-text">{{$store.getters.getUserData.name}}</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  v-model="edit_reply">
            <button class="btn btn-outline-secondary" type="button" @click="edit_message(message)">修改</button>
            <button class="btn btn-outline-secondary" type="button" @click="cancel_edit">取消</button>
        </div>
    </div>
</template>
<script>
export default {
    props:["message","IsLogin"],
    data() {
        return {
            edit_reply:"",
            isEdit:false
        }
    },
    methods: {
        owner:function (owner_account){
			const myaccount = this.$store.getters.getUserData.account;
			if (owner_account == myaccount) {
				return true
			}else{
				return false
			}
			
		},
        
		
        edit_message_start:function(message){
			if(confirm("修改此留言?")){
                this.edit_reply = message.reply;
                this.isEdit=true
			}
		},
        edit_message:function(message){
			if(confirm("確認修改?")){
				const data ={
                    id:message.id,
                    reply:this.edit_reply
                }  
                this.$http.put('http://163.17.135.174:8082/api/responds',data,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
                .then((data) =>{
                    if (data.status == 200) {
                        this.isEdit=false;
                        this.edit_reply = "";
                        this.$emit("getmessages");
                    }
                });
                
			}
		},
        cancel_edit:function(){
            this.isEdit=false;
            this.edit_reply = "";
		},
		delete_message:function(message){
			if(confirm("確認刪除?")){
				const data ={
                    id:message.id,
                }  
                this.$http.delete('http://163.17.135.174:8082/api/responds',{params: data,headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
                .then((data) =>{
                    if (data.status == 200) {
                        this.$emit("getmessages");
                    }
                });
			}
		}
    }
}
</script>