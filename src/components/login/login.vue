<template>
    <div id="login" class="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" @click.native="login">登录</mt-button>
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
                    className: 'warning'
                });
                return;
            }else if(!this.password){
                this.$toast({
                    message: '请输入密码',
                    position: 'bottom',
                    duration: 1200,
                    className: 'warning'
                });
                return;
            }
            this.$indicator.open();
            setTimeout(()=>{
                this.$indicator.close();
                this.$router.push("home")
            },600)
        }
    }
}
</script>
<style scoped>
</style>