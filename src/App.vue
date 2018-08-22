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
var swidth = document.documentElement.clientWidth;
export default {
    name: 'app',
    data: () => ({
        direction: "slide-left",
        touchLeft: swidth*2/5,
        touchStartPoint: 0,
        distance: 0,
        backBtn: null
    }),
    watch: {
        $route(to, from) {
            if (from.name == "login" || from.path.indexOf("home") > -1) {
                this.direction = "slide-left";
            } else if (to.path.indexOf("home") > -1) {
                this.direction = "slide-right";
            } else {
                const toDepth = to.path.split("/").length;
                const fromDepth = from.path.split("/").length;
                this.direction = toDepth < fromDepth ? "slide-right" : "slide-left";
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
            }
        },
        bodyTouchMove: function(event) {
            if ($tool.isIOS && this.backBtn && this.touchStartPoint < touchLeft) {
                if (event.targetTouches.length > 1) {
                    return;
                }
                this.distance = event.targetTouches[0].pageX - this.touchStartPoint;
                if (this.distance > 0 && this.distance < 100) {
                    this.backBtn.style.backgroundPosition = ((this.distance - 100) / 100) * 50 + "px 0";
                } else if (this.distance >= 100) {
                    this.backBtn.style.backgroundPosition = "0 0";
                } else {
                    this.backBtn.style.backgroundPosition = "-50px 0";
                }
            }
        },
        bodyTouchEnd: function(event) {
            if ($tool.isIOS && this.backBtn && this.touchStartPoint < touchLeft) {
                this.touchStartPoint = 0;
                this.backBtn.style.backgroundPosition = "-50px 0";
                if (this.distance > 100) {
                    this.distance = 0;
                    this.$router.back();
                }
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
    transition: transform 0.22s ease-out;
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