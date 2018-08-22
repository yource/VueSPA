<template>
    <div id="privacy" class="privacy">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">隐私</h1>
        </header>
        <ul class="mui-table-view">
            <li class="mui-table-view-divider">通讯录</li>
            <li class="mui-table-view-cell">
                加我为朋友时需要验证
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                向我推荐QQ好友
                <div class="mui-switch mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                通过QQ号搜索到我
                <div class="mui-switch mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                可通过手机号搜索到我
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
            <li class="mui-table-view-cell">
                向我推荐通讯录朋友
                <div class="mui-switch mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
            <li class="mui-table-view-divider">开启后，为你推荐已经开通HBuilder的手机联系人</li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                通过HBuilder账号搜索到我
                <div class="mui-switch mui-active mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
            <li class="mui-table-view-divider">关闭后，其他用户将不能通过HBuilder号搜索到你</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'privacy',
}
</script>
<style scoped>
.privacy {
    background: #efeff4;
    padding-top: 50px;
    min-height: 100vh;
}
</style>