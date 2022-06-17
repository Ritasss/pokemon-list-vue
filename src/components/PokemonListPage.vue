<template>
  <div class="pokemon-page-container">
    <div class="other-method-link">
      <LinkToOtherPage 
        linkBtnMsg="Change To Pagination Style" 
        targetPageurl="/pokemon-pagination">
      </LinkToOtherPage> 
    </div>
    <div class="title">Pokemon List</div>
    
    <div class="pokemon-list">
      <PokemonItem 
        v-for="pokemonItem in pokemonList" 
        v-bind:key="pokemonItem.name" 
        v-bind:pokemonItem="pokemonItem"
      >
      </PokemonItem>
    </div>

    <button 
      v-if="listcurrentNum < listtotaliLimit"
      v-on:click="fetchData()"
      class="load-more-btn">
        Load More Pokemon
    </button>
    
    <div v-else class="end-msg">~ This is the end of the first 150 Pokemons list ~</div>

  </div>
</template>

<script>
import { apiRequest } from '../utils/util.js';
import { apiList } from '../utils/apiList.js';
import PokemonItem from './PokemonItem';
import LinkToOtherPage from './LinkToOtherPage';
export default {
  name: 'PokemonPage',
  props: {
    msg: String
  },
  data() {
    return{
      pokemonList:[],
      listOffset:0,
      listpageLimit:15,
      listtotaliLimit:150,
      listcurrentNum:0
    }
  },
  components: {
    PokemonItem,
    LinkToOtherPage
  },
  methods:{
    fetchData() {
      let apiurl = apiList.pokemonList.replace(/{apiLimit}/,this.listpageLimit).replace(/{apiOffset}/,this.listOffset);
      apiRequest(apiurl).then((res)=>{
        this.pokemonList = [...this.pokemonList,...res.results];
        this.listcurrentNum += this.listpageLimit;
        if (this.listcurrentNum < this.listtotaliLimit) {
          this.listOffset += this.listpageLimit;
        }
      });
    }
  },
  created() {
    this.fetchData();
  },
  computed:{
    // testmsg: () => {
    //   // common.apiRequest();
    //   let resultmsg = apiRequest();
    //   return resultmsg;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pokemon-page-container {
    .title {
      font-size: 32px;
      font-weight: bold;
    }

    .pokemon-list {
      margin-top: 60px;
      display: flex;
      flex-wrap: wrap;
    }

    .load-more-btn {
      padding: 10px;
      color: white;
      background: black;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background: white;
        color: black;
      }
    }

    .end-msg {
      font-size: 20px;
      font-weight: bold;
      color: darkgrey;
    }
  }
</style>
