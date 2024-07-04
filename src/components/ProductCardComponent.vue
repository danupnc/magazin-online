<template>
    <div class="ProductCard">
        <h2>{{ name }}</h2>
        <img class='product-image' :src="img">
        <p>{{ description }}</p>
        <h3>{{ price }} mdl</h3>
        <img @click="addProductToCart" class="addToCartButton" src="../assets/add-to-cart.png" alt="">
    </div>
</template>



<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
    props:{ 
        id: Number,
        name: String,
        description: String,
        price: Number,
        img: String,
    },
    methods:{
        addProductToCart(){
            this.$emit('addedToCart',this.id)
        }
    }
})
export default class ProductCardComponent extends Vue {

}
</script>

<style lang="css">
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