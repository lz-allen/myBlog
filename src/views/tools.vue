<template>
  <div class="tools">
    <Scroll :data="list" class="list">
      <ul>
        <li class="tTitle">
          配色表
        </li>
        <li v-for="(c, key) in list[1]" :key="key">
          <div class="l">{{c.l}}</div>
          <div class="m"><a :href="c.m">{{c.m}}</a></div>
          <div class="r">{{c.r}}</div>
        </li>
      </ul>
      <ul>
        <li class="tTitle">
          图片类
        </li>
        <li v-for="(p, key) in list[2]" :key="key">
          <div class="l">{{p.l}}</div>
          <div class="m"><a :href="p.m">{{p.m}}</a></div>
          <div class="r">{{p.r}}</div>
        </li>
      </ul>
      <ul>
        <li class="tTitle">
          视频类
        </li>
        <li v-for="(v, key) in list[0]" :key="key">
          <div class="l">{{v.l}}</div>
          <div class="m"><a :href="v.m">{{v.m}}</a></div>
          <div class="r">{{v.r}}</div>
        </li>
      </ul>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll'
export default {
  components: {
    Scroll
  },
  props: {},
  data () {
    return {
      list: [
        [
          {
            l: '微博视频解析下载',
            m: 'http://www.weibovideo.com/',
            r: '微博、秒拍、微录客、小咖秀、BiliBli 视频解析下载'
          },
          {
            l: '秒拍视频解析下载',
            m: 'https://weibomiaopai.com/',
            r: '功能强大，支持国内外 N 多家视频解析下载，包括但不限于老司机视频'
          },
          {
            l: 'Smallcolor',
            m: 'http://video.ismallcolor.com/',
            r: '支持 86 家的网站视频下载'
          },
          {
            l: 'Video-Get',
            m: 'http://www.avideodownloader.com/',
            r: '支持 200 + 的网站视频下载，部分地区需要代理才能打开'
          },
          {
            l: 'AVideoDownloader',
            m: 'http://www.avideodownloader.com/',
            r: '支持 200 + 的网站视频下载，部分地区需要代理才能打开'
          }
        ],
        [
          {
            l: 'Color Hunt',
            m: 'http://colorhunt.co/',
            r: '每日都更新的配色网站，很漂亮，首推'
          },
          {
            l: 'Web 安全色',
            m: 'http://www.bootcss.com/p/websafecolors/',
            r: '来自 Bootstrap 优质项目推荐，总共 216 种颜色'
          },
          {
            l: 'Material',
            m: 'https://www.materialpalette.com/colors',
            r: 'Material Design 旗下的颜色表'
          },
          {
            l: '中国色',
            m: 'http://zhongguose.com/',
            r: '提供各种中国的传统颜色的名称，CMYK 值，RGB 值和 16 进制'
          }
        ],
        [
          {
            l: 'TinyPng',
            m: 'https://tinypng.com/',
            r: '在线图片压缩工具'
          },
          {
            l: '腾讯智图',
            m: 'https://zhitu.isux.us/',
            r: '在线图片压缩工具，有本地客户端'
          }
        ]
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}

</script>
<style lang="less" scoped>
  .tools {
    font-size: .8rem;
    ul {
      margin: 2rem 0;
      li {
        border: 1px solid #ddd;
        display: flex;
        margin: .5rem 0;
        align-items: center;
        box-shadow: 0 0 5px #ddd;
        &:nth-of-type(odd){
          background-color: #f8f8f8;
        }
        &.tTitle{
          line-height: 2rem;
          padding-left: 1rem;
          font-weight: bolder;
        }
        div{
          height: 100%;
        }
        .l{
          width: 6rem;
          padding: 1rem;
        }
        .r{
          width: 8rem;
          padding: 1rem;
        }
        .m{
          flex: 1;
          a{
            color: #1ca2bb;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .tools{
      ul{
        li{
          display: block;
          margin: .2rem 0;
          .l,.r{
            box-sizing: border-box;
            width: 100%;
          }
          .m{
            padding: 1rem;
          }
        }
      }
    }
  }
</style>
