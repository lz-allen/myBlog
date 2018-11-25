<template>
  <div class="loading">
    <div>
      <img src="../assets/loading.svg" alt="loading">
      <p>{{txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    txt: {
      type: String,
      default: '拼命加载中...'
    }
  }
}
</script>

<style lang="less" scoped>
  .loading{
    font-size: .6rem;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    z-index: 2000;
  }
   @media only screen and (max-width: 768px){
     .loading{
      font-size: 1.3rem!important;
      position: fixed!important;
      }
   }
</style>
