<template>
    <div id="child">
        <div>{{message1}}</div>
        <div>{{message2}}</div>
    </div>
</template>
<script>
export default {
    name: 'child',
    data(){
        return {
            message1:"",
            message2:""
        }
    },
    methods:{
        fromParent(msg){
            this.message1 = msg
        }
    }
}
</script>
<style scoped>

</style>