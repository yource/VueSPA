<template>
    <div id="messagePage" class="messagePage">
        <header class="mui-bar mui-bar-nav">
            <a id="navback" class="mui-icon mui-icon-left-nav mui-pull-left" @click="$router.back()"></a>
            <h1 class="mui-title">我的消息</h1>
            <a class="mui-icon mui-icon-compose mui-pull-right"></a>
        </header>
        <ul class="messageList">
            <li v-for="item in messages" class="bottomLine" :class="{isNew:item.isNew}">
                <img class="pic" src="@/assets/images/userDefault.jpg"></img>
                <div class="info">
                    <h3>{{item.name}}</h3>
                    <p class="ellipsis">{{item.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'meaasge',
    data() {
        return {
            messages:[{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您充值的100花币已到账~",
                isNew:true
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"有两个美女跟你打招呼！快去看看吧",
                isNew:true
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV5",
                isNew:true
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV4。您的魅力值已经达到100，成功升级为LV4。您的魅力值已经达到100，成功升级为LV4。您的魅力值已经达到100，成功升级为LV4"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            },{
                pic:"@/assets/images/defaultUser.png",
                name:"系统提示",
                content:"您的魅力值已经达到100，成功升级为LV3。啦啦啦"
            }]
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
.messagePage{
    padding-top: 50px;
}
.messageList{
    margin-bottom: 30px;
    padding-left: 10px;
}
.messageList>li{
    display: -webkit-box;
    padding: 10px 20px 10px 10px;
}
.messageList>li .pic{
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
    box-shadow: 0 1px 2px #ccc;
}
.messageList>li .info{
    -webkit-box-flex:1;
    padding-left: 15px;
}
.messageList>li .info h3{
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
}
.messageList>li .info p{
    color: #797980;
    margin-top: 5px;
    max-height: 50px;
}
.messageList>li.isNew:before{
    content: "";
    width: 6px;
    height: 6px;
    background: red;
    border-radius: 50%;
    display: block;
    position: absolute;
    right: 15px;
}
</style>