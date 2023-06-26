<script >

  import axios from 'axios';

  export default {

    data(){
      return{
        server : 'http://127.0.0.1:8000',
        route : '/projects/api/',
        test : 'http://127.0.0.1:8000/projects/api/',
        projects : [],

      }

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
  <h1>Elenco Progetti</h1>
  <ul>
    
    <li v-for="project in projects" :key="project.id">
      {{ project.title }}
    </li>
  </ul>
</template>

<style lang="scss">
  @use './scss/style.scss';
</style>
