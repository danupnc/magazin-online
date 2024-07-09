<template>
 <!-- <input id='showAllProducts' type="checkbox" v-model="this.showAllProducts">
 <label for="showAllProducts">Show All Products</label>
 <ContainerComponent :showAllProducts="showAllProducts" @adeedProductToCart="handleAddingToCart"/> -->

 <nav>
  <router-link to="/home" >HomePage</router-link>
  <router-link to="/about" >ABoutPage</router-link>
 </nav>

   <router-view></router-view>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import ContainerComponent from './components/ContainerComponent.vue'
@Options({
  
  components: {
    ContainerComponent
  },
  // methods: {
  //   handleAddingToCart(id){
      
  //   }
  // },
  data(){
    return{
      showAllProducts: false,
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, id,productCardComponentns-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
