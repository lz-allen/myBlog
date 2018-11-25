<template>
  <div class="type">
    <ul>
      <li v-for="item in typeArr" :key="item.text" @click.prevent="toTypePage(item.text)">
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getCategory} from '@/api/api'
export default {
  name: 'type',
  data () {
    return {
      typeArr: []
    }
  },
  created () {
    this._getType()
  },
  methods: {
    _getType () {
      getCategory().then(res => {
        if (res.status === 200 && res.data.code) {
          this.typeArr = res.data.data
        }
      })
    },
    toTypePage (id) {
      this.$router.push({name: 'contentList', path: '/index/contentList', query: {typeId: id}})
    }
  }
}
</script>

<style lang="less" scoped>
  .type{
    ul{
      user-select: none;
      li{
        cursor: pointer;
        text-align: center;
        border-radius: 10%;
        box-shadow: 0 0 5px #333;
        transition: transform 500ms;
        &:hover{
          transform: rotate(5deg);
        }
        p{
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          text-shadow: 0 0 3px #000;
        }
        &:nth-of-type(1){
          background-color: #CC9999;
        }
        &:nth-of-type(2){
          background-color: #99CCCC;
        }
        &:nth-of-type(3){
          background-color: #CCCC99;
        }
        &:nth-of-type(4){
          background-color: #99CCCC;
        }
        &:nth-of-type(5){
          background-color: #CCCC99;
        }
        &:nth-of-type(6){
          background-color: #CC9999;
        }
        &:nth-of-type(7){
          background-color: #CC9999;
        }
        &:nth-of-type(8){
          background-color: #99CCCC;
        }
        &:nth-of-type(9){
          background-color: #CCCC99;
        }
      }
    }
  }
  @media only screen and (max-width: 768px){
    .type{
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items:center;
        li{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30%;
          height: 11rem;
          margin: 1%;
        }
      }
    }
  }
</style>
