<template>
    <div>
        <div >
            <div v-for="message in messages" :key="message.id">
                <smessage :message="message" :IsLogin="IsLogin" @getmessages="getmessages"/>
                <hr>
            </div>
        </div>
        
        
        <div class="input-group input-group-sm" v-if="IsLogin&&!isEdit">
            <span class="input-group-text" id="inputGroup-sizing-sm">{{$store.getters.getUserData.name}}</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"  v-model="new_message">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="cteate_message">留言</button>
        </div>
    </div>
</template>
<script>
import smessage from './single_message.vue'
export default {
    props:["floor","content_id","IsLogin"],
    components: {
        smessage
    },
    data() {
        return {
            new_message:"",
            messages:[],
            edit_reply:"",
            isEdit:false
        }
    },
    mounted() {
        this.getmessages();
    },
    methods: {
        cteate_message:function(){
            const data ={
                content_id:this.content_id,
                reply:this.new_message
            }
            this.$http.post('http://163.17.135.174:8082/api/responds',data,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
			.then((data) =>{
				if (data.status == 200) {
					this.getmessages();
                    this.new_message= "";
				}
			});
        },
        getmessages:function(){
            this.$http.get('http://163.17.135.174:8082/api/responds',{params: { id: this.content_id },headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
            .then((data) =>{
                this.messages = data.data
            });
        },
    },
}
</script>