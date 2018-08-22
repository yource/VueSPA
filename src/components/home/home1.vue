<template>
    <div id="homePage1" class="homePage1">
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
</style>