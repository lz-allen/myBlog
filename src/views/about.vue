<template>
  <div class="about">
    <div class="header">
      <div class="myImg"><img src="../../static/img/Show.jpeg" alt="个人头像"></div>
      <div class="info">
        <div class="infoTop">
          <div class="name">龙兆峰</div>
          <div class="tel"><img src="../../static/img/tel.svg"/>13381678729</div>
          <div class="job">应聘岗位: 前端工程师</div>
          <div class="email"><img src="../../static/img/email.svg"/>634989720@qq.com</div>
        </div>
        <div class="infoBottom">
          <div>籍贯： 江西</div>
          <div>工作年限： 一年</div>
          <div>现居地： 上海</div>
          <div>出生年月：1993.10</div>
        </div>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}

</script>
<style lang="less" scoped>
  .about {
    color: #fff;
    font-size: .6rem;
    .header{
      background-color: #ed6372;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      .myImg{
        width: 3.5rem;
        height: 4.5rem;
        margin-right: 1.5rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .info{
        .infoTop{
          display: flex;
          flex-wrap: wrap;
          div{
            width: 50%;
            height: 2rem;
          }
          .name{
            font-size: 1.2rem;
            font-weight: bold;
          }
        }
        .infoBottom{
          display: flex;
          border: 1px solid #fff;
          padding: .5rem;
          div{
            border-right: 2px solid #fff;
            padding-right: .5rem;
            margin-left: .5rem;
            &:last-of-type{
              border-right: none;
            }
          }
        }
        .tel,.email{
          img{
            width: 1.2rem;
            height: 1.2rem;
            vertical-align: middle;
            margin-right: .2rem;
          }
        }
      }
    }
  }
</style>
