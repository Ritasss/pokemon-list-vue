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


<!--
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
-->
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
        console.log(this.currentPage == this.totalPageNums[0])
      });
    },
    pageCount() {
      const pageNum = (this.listtotaliLimit % this.listpageLimit)?(this.listtotaliLimit / this.listpageLimit) + 1 :this.listtotaliLimit / this.listpageLimit;
      this.totalPageNums = [...Array(pageNum).keys()];
      console.log(this.totalPageNums);
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
