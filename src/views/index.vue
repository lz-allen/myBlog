<template>
  <div class="index">
    <i class="menu" @click="showNav">
      <img src="../assets/menu.svg" alt="menu">
    </i>
    <el-row>
      <el-col :sm="8"><div class="left">
        <div class="title">
          <div class="titleLeft">
            <span>A</span><span>l</span><span>l</span><span>e</span><span>n</span>
          </div>
          <div class="titleRight">
            失眠先生
          </div>
        </div>
        <div class="nav">
          <ul :class="{on:navFlag}">
            <li><router-link to="/index/home">首页</router-link></li>
            <li><router-link to="/index/production">作品</router-link></li>
            <li><router-link to="/index/type">类别</router-link></li>
            <li><router-link to="/index/timeAxis">归档</router-link></li>
            <li><router-link to="/index/tools">工具</router-link></li>
            <li><router-link to="/index/about">关于</router-link></li>
          </ul>
        </div>
        <div class="exampleType hidden-xs-only">
          <h4>文章分类</h4>
          <ul>
            <li v-for="item in exampleType" :key="item._id"><a href="javacript:void(0)" @click.prevent="toTypePage(item.text)">{{item.text}}</a></li>
          </ul>
        </div>
        <div class="randomExample exampleType hidden-xs-only">
          <h4>随机文章</h4>
          <ul>
            <li v-for="item in noteList" :key="item.noteId" @click="toArticlePage(item._id)">{{item.title}}</li>
          </ul>
        </div>
        <div class="exampleType search" :class="{'hidden-xs-only':!navFlag}">
          <el-input
            placeholder="Search..."
            suffix-icon="el-icon-search"
            clearable
            @keyup.enter.native="searchInfo"
            v-model="search">
          </el-input>
        </div>
        <div class="footImage hidden-xs-only">
          <img src="../assets/leftImg.jpeg" alt="">
        </div>
        <div class="icons">
          <a href="https://github.com/lz-allen"><img src="../assets/github.svg" alt="GitHub"></a>
          <a href="https://www.zhihu.com/people/lzfallen/activities"><img src="../assets/zhihu.svg" alt="知乎"></a>
          <a href="https://juejin.im/user/5b5fc8ece51d4506d27ec861"><img src="../assets/juejin.svg" alt="掘金"></a>
          <a href="mailto:634989720@qq.com"><img src="../assets/email.svg" alt="邮箱"></a>
          <a href="tel:13381678729" class="tel"><img src="../assets/tel.svg" alt="电话"></a>
        </div>
        <div class="leftFoot hidden-xs-only">龙兆峰 @ 2018 Copyright</div>
      </div></el-col>
      <el-col :sm="16"><div class="right">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import {IsPC} from '../../utils/utils'
import {getCategory, getRandomArticle} from '@/api/api'
export default {
  name: 'index',
  data () {
    return {
      search: '',
      navFlag: false,
      currentPage: 4,
      exampleType: [],
      noteList: []
    }
  },
  created: function () {
    if (IsPC()) {
      this._getCategory()
      this._getRandomArticle()
    }
  },
  computed: {
    pathName () {
      return this.$route.name
    }
  },
  methods: {
    showNav () {
      this.navFlag = !this.navFlag
    },
    _getRandomArticle () {
      getRandomArticle().then(res => {
        if (res.status === 200 && res.data.code) {
          this.noteList = res.data.data
        }
      })
    },
    _getCategory () {
      getCategory().then(res => {
        if (res.status === 200 && res.data.code) {
          this.exampleType = res.data.data
        }
      })
    },
    searchInfo () {
      console.log(this.search, this.pathName)
    },
    toArticlePage (id) {
      this.$router.push({name: 'note', path: '/index/note', query: {noteId: id}})
    },
    toTypePage (id) {
      this.$router.push({name: 'contentList', path: '/index/contentList', query: {typeId: id}})
    }
  }
}
</script>

<style lang="less">
  .menu{
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 3rem;
    color: #666666;
    z-index: 999;
    display: none;
    img{
      width: 3rem;
      height: auto;
    }
  }
  .index {
    max-width: 60rem;
    margin: 0 auto;
    .left{
      padding-top: 5rem;
      padding-right: 10%;
      padding-bottom: 5rem;
      .title{
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid #ececec;
        line-height: 3rem;
        text-align: center;
        color: #ed6372;
        .titleLeft{
          font-size: 2rem;
          width: 40%;
          span{
            padding: 0 .1rem;
          }
        }
        .titleRight{
          background-color: #ed6372;
          color: #fff;
          width: 40%;
          line-height: 1.8rem;
          margin-left: 1rem;
          position: relative;
          &:before{
            position:absolute;
            content:"";
            height:0;
            width: 0;
            pointer-events: none;
            border: solid transparent;
            border-color: rgba(136, 183, 213, 0);
            border-right-color:  #ed6372;
            border-width: .4rem;
            top: 50%;
            right: 100%;
            margin-top: -0.4rem;
          }
        }
      }
      .nav{
        padding: 1.5rem 0;
        border-bottom: 1px solid #dcdcdc;
        ul{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        li{
          text-align: center;
          width: 40%;
          margin: .25rem 0;
          font-size: .7rem;
          a{
            display: block;
            padding: .2rem 0;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            background-color: #4b545d;
            &:hover{
              background-color: #df5958;
            }
          }
          .active-class,.router-link-active{
            background-color: #df5958;
          }
        }
      }
      .exampleType{
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #dcdcdc;
        h4{
          text-align: center;
          font-size: .8rem;
          color: #716559;
        }
        ul{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 40%;
            text-indent: 1rem;
            margin: .25rem 0;
            font-size: .6rem;
            a{
              color: #707289;
              &:hover{
                text-decoration: underline;
              }
            }
          }
        }
      }
      .randomExample{
        ul{
          li{
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            color: #707289;
            font-size: .6rem;
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
      .search{
        padding-top: 1.5rem;
        border-bottom: none;
      }
      .footImage{
        img{
          width: 100%;
        }
      }
      .icons{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ececec;
        img{
          width: 1.5rem;
          height: 1.5rem;
          margin: .4rem;
          cursor: pointer;
          border: 1px solid #ddd;
          border-radius: 50%;
        }
        .tel{
          img{
            width: 1.2rem;
            height: 1.2rem;
            padding: .2rem;
          }
        }
      }
      .leftFoot{
        padding-top: 1.5rem;
        color: #707289;
        font-size: .5rem;
      }
    }
    .right{
      padding-left: 6.666%;
      min-height: 60rem;
      padding-top: 4rem;
      border-left: 2px solid #ececec;
      .title{
        font-weight: normal;
        color: #4a4d5c;
        text-align: center;
      }
      .list{
        li{
          border: 1px solid #ddd;
          box-shadow: 0 0 5px #ddd;
          border-radius: 5px;
          transition: transform 300ms;
          &:hover{
            transform: translate3d(0,-8px,0);
            box-shadow: 0 0 10px #aaa;
          }
          h4{
            font-weight: normal;
            color: #4a4d5c;
            font-size: .8rem;
            margin: .3rem 0;
          }
          .content{
            display: flex;
            align-items: center;
            font-size: .6rem;
            color: #70787b;
          }
          .descIcon{
            display: flex;
            font-size: .6rem;
            color: #999;
            align-items: center;
            p{
              margin-right: .8rem;
            }
            .val{
              margin-left: .2rem;
            }
          }
        }
      }
      .pageNum{
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px){
    .index{
      .menu{
        display: block;
      }
      .left{
        padding-right: 0;
        padding-bottom: 0;
        .nav{
          border: none;
          padding-bottom: 0;
          ul{
            height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all .5s;
            transform: translateZ(0);
            &.on{
              overflow: auto;
              height: 7.8rem;
              opacity: 1;
            }
          }
          li{
            font-size: 1.2rem;
            a{
              padding: .4rem 0;
            }
          }
        }
        .icons{
          display: none;
        }
        .title{
          .titleLeft{
            font-size: 4rem;
          }
          .titleRight{
            line-height: 2.5rem;
            font-size: 1.8rem;
          }
        }
      }
      .right{
        position: relative;
        min-height: auto;
        padding: 0;
        border: none;
        .title{
          font-size: 1.3rem;
        }
        .desc{
          font-size: 1.3rem!important;
        }
        h4{
          font-size: 1.5rem!important;
        }
        .list{
          height: 48rem;
          overflow: hidden;
          ul{
            padding-bottom: 5rem;
            li{
              &:hover{
                transform: none;
                box-shadow: 0 0 5px #ddd;
              }
            }
          }
          .content{
            font-size: 1.2rem !important;
          }
          .descIcon{
            font-size: 1.2rem!important;
          }
          .el-button--text{
            font-size: 1.3rem!important;
          }
        }
      }
    }
  }
</style>
