<script >

  import axios from 'axios';
  import Card from '../components/Card.vue';

  export default {

    data(){
      return{
        server : 'http://127.0.0.1:8000/api/',        
        projects : [],
        types : [],
        technologies : [],

      }

    },

    components:{
      Card
    
    },

    methods:{
      getApi(endpoint){
        axios.get(endpoint)
          .then( (results) =>{
            this.projects = results.data;
            console.log('click');
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
      this.getApi(this.server + 'projects'),
      this.getTypes(),
      this.getTechnologies()
    }
  }

</script>

<template>
  <div class="container my-5">
    <h1>Projects</h1>
    tecnologie e tipi
    <div class="d-flex justify-content-center">
      <ul>
        <button
          v-for="item in types"
          :key="item.id"
          @click="this.getApi(this.server + 'projects/projects-type/' + item.id)">{{ item.name }}</button>
      </ul>

      <ul>
        <li v-for="technology in technologies" :key="technology.id" >{{ technology.name }}</li>
      </ul>

    </div>
  </div>

  <div class="container d-flex flex-wrap justify-content-evenly">
      <Card v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<style>

</style>