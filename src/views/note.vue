<template>
    <div class="note">
      <div class="title">{{articleInfo.title}}</div>
      <div class="desc">
        <p><i class="el-icon-time"></i><span class="txt hidden-xs-only">时间:</span><span class="val">{{articleInfo.publishTime | formatTime}}</span></p>
        <p><i class="el-icon-document"></i><span class="txt hidden-xs-only">分类:</span><span class="val">{{articleInfo.type}}</span></p>
        <p><i class="el-icon-message"></i><span class="txt hidden-xs-only">评论:</span><span class="val">{{articleInfo.commentTotal}}</span></p>
        <p><i class="el-icon-view"></i><span class="txt hidden-xs-only">阅读次数:</span><span class="val">{{articleInfo.total}}</span></p>
      </div>
      <scroll class="content" :data="[articleInfo]">
        <div class="hljs" v-html="articleInfo.markdown"></div>
      </scroll>
    </div>
</template>

<script>
import {formatTime} from '../../utils/utils'
import {getArticle} from '@/api/api'
import Scroll from '@/components/scroll'
export default {
  name: 'note',
  data () {
    return {
      articleInfo: {
        commentTotal: 0
      }
    }
  },
  created () {},
  mounted () {
    this.getArticleInfo()
  },
  filters: {
    formatTime
  },
  components: {
    Scroll
  },
  watch: {
    '$route': {
      handler (newVal, oldVal) {
        this.getArticleInfo()
      }
    }
  },
  methods: {
    getArticleInfo () {
      let params = {
        id: this.$route.query.noteId
      }
      getArticle(params).then(res => {
        if (res.status === 200 && res.data.code) {
          this.articleInfo = res.data.data
          this.articleInfo.commentTotal = this.articleInfo.comment.length
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.note{
  .title{
    color: #555;
    padding-top: .5rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .desc{
    display: flex;
    font-size: .6rem;
    color: #999;
    justify-content: center;
    p + p{
      border-left: 1px solid #ddd;
      margin-left: .4rem;
    }
    i{
      margin: 0 .4rem;
    }
    .txt{
      margin-right: .2rem;
    }
    .val{
      color: #707289;
    }
  }
  @media only screen and (max-width: 768px){
    .content{
      height: 48rem;
      overflow: hidden;
      .hljs{
        padding-bottom: 2rem;
      }
    }
  }
}
</style>
