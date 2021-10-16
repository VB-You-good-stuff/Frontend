<template>
    <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
        <div class="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
            <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div class="text-center text-md-center mb-4 mt-md-0">
                    <h1 class="mb-0 h3">註冊 VB你個好東東</h1>
                </div>
                <div class="form-group mb-4">
                    <label for="email">帳號(學號)</label>
                    <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">
                        <v-icon large>mdi-account</v-icon>
                    </span>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Account"
                        id="account"
                        v-model="account"
                        autofocus
                        required
                    />
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group mb-4">
                        <label for="password">密碼</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon2">
                            <v-icon large>mdi-lock</v-icon>
                            </span>
                            <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            id="password"
                            v-model="password"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group mb-4">
                        <label for="name">暱稱</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon2">
                            <v-icon large>mdi-lock</v-icon>
                            </span>
                            <input
                            type="name"
                            placeholder="name"
                            class="form-control"
                            id="name"
                            v-model="name"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-group mb-4">
                        <label for="password">e-mail</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon2">
                            <v-icon large>mdi-lock</v-icon>
                            </span>
                            <input
                            type="email"
                            placeholder="e-mail"
                            class="form-control"
                            id="email"
                            v-model="email"
                            required
                            />
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-top mb-4">
                    <div class="form-check">
                        <!-- <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="remember"
                        />
                        <label class="form-check-label mb-0" for="remember">
                        記住我
                        </label> -->
                    </div>
                    <!-- <div>
                        <a href="./forgot-password.html" class="small text-right"
                        >忘記密碼?</a
                        >
                    </div> -->
                </div>
                <div class="d-grid text-white">
                    <button  class="btn btn-gray-800" @click="submit">註冊</button>
                </div>

                <div class="d-flex justify-content-center align-items-center mt-4">
                    <span class="fw-normal">
                        已經有帳號了?
                        <router-link to="login">返回登入</router-link>
                    </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>
<script>
export default {
  name: "LogIn",
  data() {
    return {
        account:"",
        password:"",
        name:"",
        email:"",
    }

  },
  methods: {
    submit:function(){
        this.$http.post('http://163.17.135.174:8082/api/members', {
            account: this.account,
            password: this.password,
            name: this.name,
            email: this.email
        }).then((data) =>{
            
            this.$store.commit('setToken',data.data.access_token)
            this.$router.push("/")
        }).catch(function(error) {
            const error_message = JSON.parse(error.response.data);
            for (const [, value] of Object.entries(error_message)) {
                alert(value)
            }
        });
    }
  },
};
</script>
