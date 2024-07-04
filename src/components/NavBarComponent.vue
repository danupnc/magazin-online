<template>
 
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
   
  components: {

  },
})
export default class ProductCardComponent extends Vue {

}
</script>

<style lang="css">
    .ProductCard{
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
</style>