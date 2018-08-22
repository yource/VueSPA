<template>
    <div id="settingPage" class="settingPage">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">设置</h1>
            <!-- <a class="mui-icon mui-icon-bars mui-pull-right"></a> -->
        </header>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
            	<router-link class="mui-navigate-right" to="/setting/account">账号与安全</router-link>
            </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <router-link class="mui-navigate-right" to="/setting/notifications">新消息通知</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link class="mui-navigate-right" to="/setting/privacy">隐私</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link class="mui-navigate-right" to="/setting/general">通用</router-link>
            </li>
        </ul>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
                <a class="mui-navigate-right">关于MUI <i class="mui-pull-right">V3.1.0</i></a>
            </li>
        </ul>
        <mt-button type="danger" size="large" @click.native="loginOut">退出登录</mt-button>
    </div>
</template>
<script>
export default {
    name: 'setting',
    methods:{
    	loginOut(){
    		console.log("loginout")
    	}
    }
}
</script>
<style scoped>
.settingPage{
	background: #efeff4;
	padding-top: 55px;
	min-height: 100vh;
}
.mui-table-view {
    margin-top: 20px;
}

.mui-table-view span.mui-pull-right {
    color: #999;
}

.mui-table-view-divider {
    background-color: #efeff4;
    font-size: 14px;
}

.mui-table-view-divider:before,
.mui-table-view-divider:after {
    height: 0;
}
.mint-button--large{
    margin-top: 50px;
}
</style>