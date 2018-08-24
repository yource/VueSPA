<template>
    <div id="homePage1" class="homePage1">
        <div class="user">
            <div class="head">
                <div class="message" @click="$router.push('/message')">
                    <span class="mui-icon mui-icon-email" :class="{hasNew:hasNewMessage}"></span>
                </div>
                <div class="username">
                    天桥下的等待
                </div>
                <div class="setting">
                    <span class="mui-icon mui-icon-settings" @click="$router.push('/setting')"></span>
                </div>
            </div>
            <div class="userPicCon">
                <img src="../../assets/images/user.png">
            </div>
        </div>
        <div class="gap"></div>
        <mt-button type="default" size="large" @click.native="openAlert">打开alert框</mt-button>
        <mt-button type="default" size="large" @click.native="openConfirm">打开comfirm框</mt-button>
        <mt-button type="default" size="large" @click.native="sheetVisible=true">点击上拉action sheet</mt-button>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
export default {
    name: 'home1',
    data() {
        return {
            hasNewMessage:true,
            actions: [{ 
            	name: "拍照", 
            	method: this.TakePhoto
            }, { 
            	name: "从相册选择", 
            	method: this.OpenAlbum }],
            sheetVisible: false
        }
    },
    methods: {
        openAlert() {
            this.$messagebox.alert('您已成功开通会员');
        },
        openConfirm() {
            this.$messagebox.confirm('确定充值100元？').then((action) => {
                this.$toast({
                    message: '充值成功',
                    position: 'bottom',
                    duration: 1200
                });
            });
        },
        TakePhoto(){console.log("paizhao")},
        OpenAlbum(){console.log("xiangce")}
    }
}
</script>
<style scoped>
.head{
    padding: 0 15px;
    height: 50px;
    display: -webkit-box;
    -webkit-box-align:center;
    font-size: 16px;
}
.head .username{
    -webkit-box-flex:1;
    text-align: center;
}
.head .message .mui-icon{
    font-size: 30px;
}
.user {
    padding-bottom: 20px;
}
.user .userPicCon{
    width: 120px;
    height: 120px;
    margin: 0 auto;
}
.user .userPicCon img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.hasNew::after{
    content:"";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: red;
    margin-top: -28px;
    margin-left: 26px;
}
</style>