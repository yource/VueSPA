<template>
    <div id="account" class="account">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">账号与安全</h1>
        </header>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a id="head" class="mui-navigate-right">头像
                    <span class="mui-pull-right head">
                        <img class="head-img mui-action-preview" id="head-img1" src=""/>
                    </span>
                </a>
            </li>
            <li class="mui-table-view-cell">
                <a>姓名<span class="mui-pull-right">Hbuilder</span></a>
            </li>
            <li class="mui-table-view-cell">
                <a>HBuilder账号<span class="mui-pull-right">hbuilder@dcloud.io</span></a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <a>QQ号<span class="mui-pull-right">88888888</span></a>
            </li>
            <li class="mui-table-view-cell">
                <a>手机号<span class="mui-pull-right">18601234567</span></a>
            </li>
            <li class="mui-table-view-cell">
                <a>邮箱地址<span class="mui-pull-right">hbuilder@dcloud.io</span></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'account',
}
</script>
<style scoped>
.account {
    background: #efeff4;
    padding-top: 50px;
    min-height: 100vh;
}
</style>