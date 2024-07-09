<template>
<div>
    <h1>Pagina About</h1>
</div>
</template>



<script lang="ts"> 
import { Options, Vue } from 'vue-class-component';


@Options({

  components: {

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
            
        }

    }
})

export default class aboutView extends Vue {

}
</script>

<style lang="css">
   
</style>