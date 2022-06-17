<template>
    <div class="pokemon-item">
        <img v-if="pokemonDetails.id" v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonDetails.id + '.png'" />
        <div class="item-details">
            <div class="item-title">Pokemon Details:</div>
            <div class="item-name">Name: {{pokemonItem.name}}</div>
            <div class="item-height">Height: {{pokemonDetails.height}}</div>
            <div class="item-weight">Weight: {{pokemonDetails.weight}}</div>
        </div>
    </div>
</template>

<script>
import { apiRequest } from '../utils/util.js';
export default {
  name: 'PokemonItem',
  props: {
    pokemonItem: Object
  },
  data() {
    return{
      pokemonDetails:[]
    }
  },
  methods:{
    fetchItemData() {
      apiRequest(this.pokemonItem.url).then((res)=>{
        this.pokemonDetails = res;
      });
    }
  },
  created() {
    this.fetchItemData();
  },
  computed:{
    
  }
}
</script>

<style lang="scss" scoped>
    @import '@/_mixin.scss';
    .pokemon-item {
        width: calc(100% / 3);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex-direction: column;
        margin-bottom: 20px;

        @include mobile-sm {
          width: 50%;
        }

        .item-details {
            text-align: left;
        }
        .item-title {
            font-weight: bold;
        }
    }

</style>
