<template>
<div class="ProductCard" >
         <h2>Produs sablon</h2>
        <img class='product-image'/>
        <p></p>
        <h3>ID-ul Produsului:{{idProdus}}</h3>
        <img @click="addProductToCart" class="addToCartButton" src="../assets/add-to-cart.png" alt="">
</div>
</template>



<script lang="ts"> 
import { Options, Vue } from 'vue-class-component';


@Options({

  components: {

  },
  created() {
    this.idProdus = this.route.params.id;
  },
  methods: {
 
  },
  props:{
    showAllProducts:{
        type: String,
        default: false
    } 
  },
    data() {
        return{
            idProdus: null,

        }

    }
})

export default class productView extends Vue {

}
</script>

<style scoped lang="css">
      .ProductCard{
        position: relative;
        width: 300px;
        height: 450px;
        border: 1px solid black;
        transition:all 0.4s ease-in-out;
        border-radius: 30px;
        margin-bottom: 40px;
    }
    .product-image{
        width: 80%;
        height: 55%;
    }
    .addToCartButton{
        position: absolute;
        width: 30px;
        right: 15px;
        bottom: 15px;
        cursor: pointer;
        border: 2px solid black;
        border-radius: 5px;
        padding: 5px;

    }
</style>