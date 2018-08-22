<template>
    <div id="general" class="general">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">通用</h1>
        </header>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                多语言
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                听筒模式
                <div class="mui-switch mui-switch-mini">
                    <div class="mui-switch-handle"></div>
                </div>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                功能
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'general',
}
</script>
<style scoped>
.general {
    background: #efeff4;
    padding-top: 50px;
    min-height: 100vh;
}
</style>