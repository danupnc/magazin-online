<template>
<div class="container">

    <ul class="product-list">
        <li v-for="produs of products " :key="produs.id" :class="[{'stock-none': (produs.stock == 0 && !showAllProducts)}, {'transparent':( produs.stock == 0 && showAllProducts) } ]">
             <ProductCardComponent 
                :id=produs.id :name="produs.name" :description="produs.description" :price="produs.price" :img="produs.image" 
                @addedToCart="handleAddingToCart"/>
        </li>
    </ul>
 

    </div>
</template>



<script lang="ts"> 
import { Options, Vue } from 'vue-class-component';
import ProductCardComponent from './ProductCardComponent.vue';

@Options({
    name: 'ContainerComponent',
  components: {
    ProductCardComponent,
  },
  methods: {
    handleAddingToCart(id:number){
         this.$emit('addedProductToCart',id)
    }
  },
  props:{
    showAllProducts:{
        type: String,
        default: false
    } 
  },
    data() {
        return{
            products:[{
                id: 0,
                name: 'Iphone 15 Pro Max Black',
                description: "6.6 | 30 MP | 8GB | Dual SIM ",
                price: '25000',
                image: 'https://rphonequality.ro/wp-content/uploads/2023/09/res_c604fe991d63a90d06892245970ba56e-1.jpg',
                stock: 15
            },
            {
                id: 1,
                name: 'Laptop Apple MacBook Pro 16 2023 Silver',
                description: "16.2 | 32 GB | 1 TB | Apple M2 Max (12/ 32) | VGA Integrată",
                price: '79 990',
                image: 'https://www.macconsultshop.de/images/thumbnail/produkte/medium/MTL73D_A_pic1.jpg',
                stock: 0

            },
            {
                id: 2,
                name: 'Tabletă Apple iPad Pro 2024 13" Wi-Fi Silver',
                description: "8 GB | 256 GB | 12 MP | MWRH3NF/ A",
                price: '31 290',
                image: 'https://media.ldlc.com/r1600/ld/products/00/06/13/35/LD0006133568_0006133948.jpg',
                stock: 12
            },
            {
                id: 3,
                name: 'Ceas inteligent Apple Watch Series 9 Starlight',
                description: "1.69 | 41 mm | Aluminiu/ Silicon| MR8U3",
                price: '10 499',
                image: 'https://gorilla.md/wp-content/uploads/2023/09/darwin-ceas-inteligent-apple-watch-series-9-starlight-314045.webp',
                stock: 13
            }],
            

        }
    }
})

export default class ContainerComponent extends Vue {

}
</script>

<style scoped lang="css">
    .container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      
    }
    .product-list{
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
}
    .stock-none{
        display: none;
    }
    .transparent{
        opacity: 70%;
    }
</style>