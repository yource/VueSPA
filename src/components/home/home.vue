<template>
    <div id="homePage" class="homePage">
        <keep-alive>
            <router-view class="homeView"></router-view>
        </keep-alive>
        <mt-tabbar v-model="activeTab" :fixed="true">
            <mt-tab-item id="home1">
                <img slot="icon" v-show="activeTab!='home1'" src="../../assets/icon/book.png"> 
                <img slot="icon" v-show="activeTab=='home1'" src="../../assets/icon/book-active.png"> 
                首页
            </mt-tab-item>
            <mt-tab-item id="home2">
                <img slot="icon" v-show="activeTab!='home2'" src="../../assets/icon/music.png"> 
                <img slot="icon" v-show="activeTab=='home2'" src="../../assets/icon/music-active.png"> 
                推荐
            </mt-tab-item>
            <mt-tab-item id="home3">
                <img slot="icon" v-show="activeTab!='home3'" src="../../assets/icon/mv.png"> 
                <img slot="icon" v-show="activeTab=='home3'" src="../../assets/icon/mv-active.png"> 
                发现
            </mt-tab-item>
            <mt-tab-item id="home4">
                <img slot="icon" v-show="activeTab!='home4'" src="../../assets/icon/user.png"> 
                <img slot="icon" v-show="activeTab=='home4'" src="../../assets/icon/user-active.png"> 
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            activeTab: "home1"
        }
    },
    watch:{
        activeTab(newtab){
            this.$route.meta.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            this.$router.replace("/home/"+newtab);
        }
    }

}
</script>
<style scoped>
.homePage {
    background: #fff;
    min-height: 100vh;
}
</style>