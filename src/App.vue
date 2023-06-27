<script >

  import axios from 'axios';
  import Header from './components/Header.vue';
  import {router} from './router.js';

  export default {

    

    components:{
      Header
    },

  

    
  }

</script>

<template>
  <Header />
  

  <router-view></router-view>
    
  

  
</template>

<style lang="scss">
  @use './scss/style.scss';
</style>
