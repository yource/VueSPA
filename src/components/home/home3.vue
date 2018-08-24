<template>
    <div id="parent">
    	<button @click="toChild">click</button>
    	<child ref="child"></child>
    </div>
</template>
<script>
import child from "./home3child.vue"
export default {
    name: 'home3',
    components:{child},
    methods:{
    	toChild(){
    		/** this.$refs.child返回child组件实例 **/

    		// 调用子组件的fromParent方法
    		this.$refs.child.fromParent("我从父组件传递过来")
    		// 直接修改child的data
    		this.$refs.child.message2 = "啦啦啦"
    	}
    }
}
</script>
<style scoped>
.homePage3 {}
</style>