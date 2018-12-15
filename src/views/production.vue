<template>
  <div class="production">
    <h4><el-tag type="danger">作品列表</el-tag></h4>
    <ul>
      <li>
        <a href="http://localhost:3000/production/plan/index.html" target="_blank">
            <div class="before" :style="{backgroundImage: 'url(../static/img/plan.png)'}">
              <!-- <img src="../assets/item2.jpeg" alt="" /> -->
            </div>
            <div class="after">
              <p class="head">打飞机游戏</p>
              <p class="body">本游戏运用H5引擎制作，目前实现积分，消灭敌机，选择关卡</p>
            </div>
        </a>
      </li>
      <li>
        <a href="http://localhost:3000/production/hotel/index_1.html" target="_blank">
            <div class="before" :style="{backgroundImage: 'url(../static/img/hotel.png)'}">
              <!-- <img src="../assets/item2.jpeg" alt="" /> -->
            </div>
            <div class="after">
              <p class="head">hotel网站设计</p>
              <p class="body">本网站运用jquery技术，html，css布局</p>
            </div>
        </a>
      </li>
      <li>
        <a href="http://localhost:3000/production/chemical/html/index.html" target="_blank">
            <div class="before" :style="{backgroundImage: 'url(../static/img/chemical.png)'}">
              <!-- <img src="../assets/item2.jpeg" alt="" /> -->
            </div>
            <div class="after">
              <p class="head">化工学院</p>
              <p class="body">化工学院网站布局，Tab切换，轮播切换</p>
            </div>
        </a>
      </li>
      <li>
        <a href="http://localhost:3000/production/snake/tcs.html" target="_blank">
            <div class="before" :style="{backgroundImage: 'url(../static/img/snake.png)'}">
              <!-- <img src="../assets/item2.jpeg" alt="" /> -->
            </div>
            <div class="after">
              <p class="head">贪吃蛇</p>
              <p class="body">怀念贪吃蛇游戏</p>
            </div>
        </a>
      </li>
    </ul>
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
  .production {
    font-size: .8rem;
    height: 40rem;
    ul{
      display: flex;
      li{
        position: relative;
        width: 30%;
        margin: .5rem;
        box-sizing: border-box;
        list-style: none;
        cursor: pointer;
        &:hover .after{
          transform: rotateY(0deg);
        }
        &:hover .before{
          transform: rotateY(180deg);
        }
        .after{
          transform: rotateY(-180deg);
          backface-visibility: hidden;
          color: #fff;
          background-color: #333;
          font-size: .8rem;
          box-sizing: border-box;
          padding: 0 1rem;
          .head{
            text-align: center
          }
          .body{
            font-size: .6rem;
            text-indent: 2em;
          }
        }
        .before{
          backface-visibility: hidden;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        div{
          position: absolute;
          width: 100%;
          height: 140px;
          transition: transform 1.5s;
          overflow: hidden;
          border-radius: 5px;
          box-shadow: 0 0 5px  #000;
          img{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .production{
      ul{
        display: block;
        padding: 1rem;
        li{
          width: 100%;
          height: 12rem;
          margin: 3rem 0;
          box-sizing: border-box;
        }
      }
    }
  }

</style>
