<template>
    <div id="app" v-on:touchstart="bodyTouchStart" v-on:touchmove="bodyTouchMove" v-on:touchend="bodyTouchEnd">
        <transition :name="direction">
            <keep-alive include="home">
                <router-view class="appView"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app',
    data: () => ({
        direction: "slide-right",
        touchStartPoint: 0,
        distance: 0,
        touching: false,
        backBtn: null
    }),
    watch: {
        $route(to, from) {
            if (from.name == "login") {
                this.direction = "slide-left";
            } else if (to.name == "home") {
                this.direction = "slide-right";
            } else {
                const toDepth = to.path.split("/").length;
                const fromDepth = from.path.split("/").length;
                this.direction = toDepth > fromDepth ? "slide-left" : "slide-right";
            }
        }
    },
    methods: {
        bodyTouchStart: function(event) {
            this.backBtn = document.getElementById("navback");
            if ($tool.isIOS && this.backBtn) {
                var touch = event.targetTouches[0];
                this.touchStartPoint = touch.pageX;
                this.distance = 0;
                this.touching = true;
            }
        },
        bodyTouchMove: function(event) {
            if ($tool.isIOS && this.backBtn && this.touchStartPoint < 100) {
                if (event.targetTouches.length > 1) {
                    return;
                }
                this.distance = event.targetTouches[0].pageX - this.touchStartPoint;
                if (this.distance > 0) {
                    //手势右滑时，不立即改变路由，在页面上做出响应
                }
            }
        },
        bodyTouchEnd: function(event) {
            if ($tool.isIOS && this.backBtn && this.touchStartPoint < 100) {
                if (this.distance > 70) {
                    this.$router.back();
                }
                this.touching = false;
                this.distance = 0;
                this.touchStartPoint = 0;
            }
        }
    }
}
</script>
<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
}

.appView {
    position: absolute;
    width: 100%;
    background: #fff;
    min-height: 100vh;
    transition: transform 0.16s ease-out;
}

.slide-left-enter {
    transform: translate(100%, 0);
}

.slide-left-leave-active {
    transform: translate(-50%, 0);
}

.slide-right-enter {
    transform: translate(-50%, 0);
}

.slide-right-leave-active {
    transform: translate(100%, 0);
}
</style>