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
        types : [],
        technologies : [],

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
      },

      getTypes(){
        axios.get('http://127.0.0.1:8000/api/projects/tipi')
          .then( (results) =>{
            this.types = results.data;
          }).catch((err) => {
            console.log(err);
          })
      },

      getTechnologies(){
        axios.get('http://127.0.0.1:8000/api/projects/tecnologie')
          .then( (results) =>{
            this.technologies = results.data;
          }).catch((err) => {
            console.log(err);
          })
      }
    },

    

    mounted(){
      this.getApi(),
      this.getTypes(),
      this.getTechnologies()
    }
  }

</script>

<template>
  <div class="container my-5">
    <h1>Projects</h1>
    tecnologie e tipi
    <div class="d-flex">
      <ul>
        <li v-for="item in types" :key="item.id" >{{ item.name }}</li>
      </ul>

      <ul>
        <li v-for="technology in technologies" :key="technology.id" >{{ technology.name }}</li>
      </ul>

    </div>
  </div>

  <div class="container d-flex flex-wrap">
      <Card v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<style>

</style>