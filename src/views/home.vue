<template>
    <div class="home">
      <slot name="title">
        <h4><el-tag type="danger">最近文章</el-tag></h4>
      </slot>
      <scroll ref="scroll" class="list" :data="lists" :pullup="pullup" @scrollEnd="addMore">
        <ul>
          <li v-for="(item,key) in lists" :key="key" @click="toArticlePage(item._id)">
            <div class="itemLeft">
              <img src="../assets/item.jpeg" alt="">
            </div>
            <div class="itemRight">
              <h4>{{item.title}}</h4>
              <div class="content">
                <div class="desc">
                  {{item.desc}}
                </div>
              </div>
              <div class="descIcon">
                <p><i class="el-icon-time"></i><span class="val">{{item.publishTime | formatTime}}</span></p>
                <p><i class="el-icon-document"></i><span class="val">{{item.type}}</span></p>
              </div>
            </div>
          </li>
        </ul>
      </scroll>
      <loading v-show="isLoading" :txt="loadingTxt" class="loading"></loading>
      <div class="pageNum hidden-xs-only">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
</template>

<script>
import Scroll from '@/components/scroll'
import Loading from '@/components/loading'
import {getList} from '@/api/api'
import {formatTime} from '../../utils/utils'
export default {
  name: 'home',
  data () {
    return {
      isLoading: false,
      pullup: true,
      currentPage: 1,
      slideEnd: false,
      pageSize: 6,
      loadingTxt: '拼命加载中...',
      lists: [],
      total: 1
    }
  },
  mounted () {
    this.getListData()
  },
  created () {},
  filters: {
    formatTime
  },
  watch: {
    '$route': {
      handler (newVal) {
        this.getListData()
      }
    }
  },
  methods: {
    addMore () {
      this.currentPage++
      this.getListData('mobile')
    },
    getListData (name) {
      if (this.slideEnd) {
        return
      }
      this.isLoading = true
      let typeId = this.$route.query.typeId
      let params = {
        pageSize: this.pageSize,
        currentPage: this.currentPage
      }
      if (typeId) {
        params['type'] = typeId
      }
      getList(params).then(res => {
        this.$nextTick(() => {
          this.$refs.scroll.scroll.refresh()
        })
        if (res.status === 200 && res.data.code) {
          if (name) {
            if (!res.data.data.list.length) {
              this.slideEnd = true
            }
            this.lists = this.lists.concat(res.data.data.list)
            this.isLoading = false
            return
          }
          this.total = res.data.data.total
          this.lists = res.data.data.list
          this.isLoading = false
        }
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getListData()
    },
    toArticlePage (index) {
      this.$router.push({name: 'note', path: '/index/note', query: {noteId: index}})
    }
  },
  components: {
    Scroll,
    Loading
  }
}
</script>

<style lang="less" scoped>
  .home{
    position: relative;
    .list{
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 45%;
          margin: .5rem;
          box-sizing: border-box;
          padding: .5rem;
          cursor: pointer;
          .itemLeft{
            img{
              width: 100%;
              height: 100%
            }
          }
          .itemRight{
            .content{
              .desc{
                text-indent: 2em;
                line-height: 1.5;
                display:-webkit-box;
                -webkit-line-clamp:3;
                -webkit-box-orient:vertical;
                overflow:hidden;
              }
            }
          }
        }
      }
    }
    .loading{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 768px){
    .home{
      .list{
        ul{
          display: block;
          li{
            width: 100%;
            margin: 1rem 0;
            box-sizing: border-box;
            padding: 1rem;
            h4{
              margin: 1.1rem 0;
            }
          }
        }
      }
    }
  }
</style>
