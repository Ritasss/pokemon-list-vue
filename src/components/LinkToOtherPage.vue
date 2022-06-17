<template>
    <router-link class="page-link-btn" :to="targetPageurl">
        {{linkBtnMsg}}
    </router-link>
</template>

<script>
export default {
  name: 'LinkToOtherPage',
  props: {
    linkBtnMsg: String,
    targetPageurl: String
  },
  data() {
    return{
      pokemonDetails:[]
    }
  },
  methods:{
  },
  created() {
  },
  computed:{
    
  }
}
</script>

<style lang="scss" scoped>
    .page-link-btn {
      box-sizing: border-box;
      width: 250px;
      padding: 10px 20px;
      background-color: black;
      color: white;
      border: 1px solid black;
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      &:hover {
        color: black;
        background-color: white;
      }
    }

</style>
