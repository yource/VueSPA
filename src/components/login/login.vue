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
    data(){
    	return{
    		username:"",
    		password:""
    	}
    },
    methods:{
    	login(){
    		this.$router.push("home")
    	}
    }
}
</script>
<style scoped>

</style>