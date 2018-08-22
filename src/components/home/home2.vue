<template>
    <div id="homePage2" class="homePage2">
        <div class="mui-content">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                    </div>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header">页眉</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                    </div>
                </div>
                <div class="mui-card-footer">页脚</div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-content">
                	<img src="../../assets/images/cbd.jpg" alt="" width="100%" />
                    <div class="mui-card-content-inner">
                        <p>Posted on January 18, 2016</p>
                        <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
                    </div>
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header mui-card-media">
                    <div class="mui-card-media-object mui-pull-left">
                        <img src="../../assets/images/logo.png" width="34px" height="34px" />
                    </div>
                    <div class="mui-card-media-body">
                        小M
                        <p class="mui-ellipsis">发表于 6小时前</p>
                    </div>
                </div>
                <div class="mui-card-content mui-card-media" style="height:40vw;">
                	<img src="../../assets/images/yuantiao.jpg" alt="" width="100%" />
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Comment</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
            <div class="mui-card">
                <div class="mui-card-header mui-card-media">
                    <img src="../../assets/images/logo.png" />
                    <div class="mui-media-body">
                        小M
                        <p>发表于 2016-06-30 15:30</p>
                    </div>
                </div>
                <div class="mui-card-content">
                    <img src="../../assets/images/yuantiao.jpg" alt="" width="100%" />
                </div>
                <div class="mui-card-footer">
                    <a class="mui-card-link">Like</a>
                    <a class="mui-card-link">Comment</a>
                    <a class="mui-card-link">Read more</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home2'
}
</script>
<style scoped>
.mui-content{
	padding-top: 2px;
}
.mui-plus header.mui-bar{
	display: none;
}
.mui-plus .mui-bar-nav~.mui-content{
	padding: 0;
}
.hm-description{
	margin: .5em 0;
}

.hm-description>li {
	font-size: 14px;
	color: #8f8f94;
}
</style>