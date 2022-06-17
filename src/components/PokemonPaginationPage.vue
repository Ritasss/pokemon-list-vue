<template>
  <div class="pokemon-page-container">
    <div class="other-method-link">
      <LinkToOtherPage 
        linkBtnMsg="Change To Load More style" 
        targetPageurl="/pokemon-list">
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

    <div class="page-btn-section">
      <button v-if="currentPage !== totalPageNums[0]" v-on:click="previousPage()" class="previous-btn page-btn">&#10094;</button>
      <button 
        v-for="pagenum in totalPageNums"
        v-bind:key="pagenum" 
        v-on:click="fetchData(pagenum)"
        :class="{ active: pagenum === currentPage }"
        class="page-btn">
          {{pagenum + 1}}
      </button>
      <button v-if="currentPage !== totalPageNums[totalPageNums.length - 1]" v-on:click="nextPage()" class="next-btn page-btn">&#10095;</button>
    </div>
  </div>
</template>

<script>
import { apiRequest } from '../utils/util.js';
import { apiList } from '../utils/apiList.js';
import PokemonItem from './PokemonItem';
import LinkToOtherPage from './LinkToOtherPage';
export default {
  name: 'PokemonPaginationPage',
  props: {
    msg: String
  },
  data() {
    return{
      pokemonList:[],
      listpageLimit:30,
      listtotaliLimit:150,
      currentPage:0,
      totalPageNums:[]
    }
  },
  components: {
    PokemonItem,
    LinkToOtherPage
  },
  methods:{
    fetchData(pageNum) {
      const targetOffset = this.listpageLimit*pageNum;
      let apiurl = apiList.pokemonList.replace(/{apiLimit}/,this.listpageLimit).replace(/{apiOffset}/,targetOffset);
      apiRequest(apiurl).then((res)=>{
        this.pokemonList = res.results;
        this.currentPage = pageNum;
      });
    },
    pageCount() {
      const pageNum = (this.listtotaliLimit % this.listpageLimit)?(this.listtotaliLimit / this.listpageLimit) + 1 :this.listtotaliLimit / this.listpageLimit;
      this.totalPageNums = [...Array(pageNum).keys()];
    },
    nextPage() {
      this.fetchData(this.currentPage + 1);
      
    },
    previousPage() {
      this.fetchData(this.currentPage - 1);
    }
  },
  created() {
    this.fetchData(this.currentPage);
    this.pageCount();
  }
}
</script>

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

    .page-btn-section {
      margin-top: 30px;

      .page-btn {
        background: none;
        border: 0;
        text-decoration: underline;
        cursor: pointer;

        &.active {
          text-decoration: none;
          pointer-events: none;
        }

        &.previous-btn {
          text-decoration: none
        }
        &.next-btn {
          text-decoration: none
        }
      }
    }
  }
</style>
