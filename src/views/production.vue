<template>
  <div class="production">
    <h4><el-tag type="danger">作品列表</el-tag></h4>
    <ul>
      <li>
        <div class="before">
          <img src="../assets/item2.jpeg" alt="" />
        </div>
        <div class="after">
          <p class="head">贪吃蛇</p>
          <p class="body">个人开发游戏</p>
        </div>
      </li>
      <li>
        <div class="before">
          <img src="../assets/item2.jpeg" alt="" />
        </div>
        <div class="after">
          <p class="head">贪吃蛇</p>
          <p class="body">个人开发游戏</p>
        </div>
      </li>
      <li>
        <div class="before">
          <img src="../assets/item2.jpeg" alt="" />
        </div>
        <div class="after">
          <p class="head">贪吃蛇</p>
          <p class="body">个人开发游戏</p>
        </div>
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
