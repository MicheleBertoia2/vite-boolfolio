<script >

  import axios from 'axios';
  import Card from '../components/Card.vue';

  export default {

    data(){
      return{
        server : 'http://127.0.0.1:8000',
        route : '/projects/api/',
        test : 'http://127.0.0.1:8000/projects/api/',
        projects : [],

      }

    },

    components:{
      Card
    
    },

    methods:{
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then( (results) =>{
            this.projects = results.data;
          }).catch((err) => {
            console.log(err);
          })
      }
    },

    mounted(){
      this.getApi()
    }
  }

</script>

<template>
  <div class="container my-5">
    <h1>Projects</h1>
    tecnologie e tipi
  </div>

  <div class="container d-flex flex-wrap">
      <Card v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<style>

</style>