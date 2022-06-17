import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/IndexPage'
import PokemonListPage from '@/components/PokemonListPage'
import PokemonPaginationPage from '@/components/PokemonPaginationPage'


Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:  [
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/pokemon-list',
            name: 'PokemonListPage',
            component: PokemonListPage
        },
        {
            path:'/pokemon-pagination',
            name: 'PokemonPaginationPage',
            component: PokemonPaginationPage
        }
    ]
})