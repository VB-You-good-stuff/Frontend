<template>
    <div>
        <SideBar :IsLogin="IsLogin"/>
        <main class="content">
            <Header :user="user" :IsLogin="IsLogin" @logout="logout"/>
            <div class="container-fluid">
                <v-fade-transition mode="out-in"> -->
                    <router-view style="min-height:100vh" :IsLogin="IsLogin" />
                </v-fade-transition>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    data() {
        return {
            IsLogin:true,
            user:{}
        }
    },
    created() {
        if(!this.$store.getters.getToken ==""){
            //驗證身分
            const self = this;
            this.$http.get( `http://163.17.135.174:8082/api/members`,{headers: { authorization: `Bearer ${this.$store.getters.getToken}`}})
            .then(response=> {
                if (response.status == 200) {
                    this.IsLogin = true
                    this.user = response.data;
                    this.$store.commit('setUserData',response.data)
                // if (this.user.forget_question == 0) {
                //   alert("請修改個人資料 填入完整忘記密碼問題 避免無法找回帳號")
                //   this.$router.push("/editprofile");
                // }
                // if(this.user.status == 4) console.log("是管理員")
                }
            }).catch(()=> {
                self.$store.commit("setToken", "");
                this.IsLogin = false;
            });
        }else{
            this.IsLogin = false
        }
    },
    methods: {
        logout:function(){
            this.IsLogin = false
            this.user = {}
        }
    },
}
</script>
<style scoped>
    @media (max-width:768px){
        .container-fluid{
            padding-right: 0 !important;
            padding-left: 0 !important;
        }
    }
</style>