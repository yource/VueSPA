<template>
    <div id="notifications" class="notifications">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">新消息通知</h1>
        </header>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a>接收新消息通知<span class="mui-pull-right">已开启</span></a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <span>通知显示消息详情</span>
                <mt-switch change="changeSetting" v-model="notice"></mt-switch>
            </li>
            <p>若关闭，当收到新消息时，通知提示将不显示发信人和内容摘要</p>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <span>声音</span>
                <mt-switch change="changeSetting" v-model="sound"></mt-switch>
            </li>
            <li class="mui-table-view-cell">
                <span>震动</span>
                <mt-switch change="changeSetting" v-model="shake"></mt-switch>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'notifications',
    data(){return{
        notice:true,
        sound:true,
        shake:true
    }},
    methods:{
        changeSetting(){
            
        }
    }
}
</script>
<style scoped>
.notifications {
    background: #efeff4;
    padding-top: 50px;
    min-height: 100vh;
}
</style>