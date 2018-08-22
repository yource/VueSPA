<template>
    <div id="loginPage" class="loginPage">
        <!-- <input type="text" name="" style="border: 1px solid #ccc"> -->
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" @click.native="login" class="loginBtn">登录</mt-button>

    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {
            if (!this.username) {
                this.$toast({
                    message: '请输入用户名',
                    position: 'bottom',
                    duration: 1200,
                    className: 'danger'
                });
                return;
            }else if(!this.password){
                this.$toast({
                    message: '请输入密码',
                    position: 'bottom',
                    duration: 1200,
                    className: 'danger'
                });
                return;
            }
            this.$indicator.open();
            setTimeout(()=>{
                this.$indicator.close();
                this.$router.push("/home/home1")
            },600)
        }
    }
}
</script>
<style scoped>
.loginPage{
    background: #f4f5f6;
    padding-top: 150px;
}
.loginBtn{
    display: block;
    width: 65%;
    margin:100px auto;
}
</style>