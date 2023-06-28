
<script>

import axios from 'axios';

export default {
  name: 'ProjectDetail',

  data(){
    return{
      project: null,
      loaded: false
    }
  },

  methods:{
    getApi(){
      this.loaded = false
      axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
            .then(results => {
              this.project = results.data
            })
      this.loaded = true
    }
  },

  computed:{
    type(){
      return (this.project.type) ? this.project.type.name : 'Nessun tipo di progetto presente'
    }
  },

  mounted(){
    this.getApi()
  },

  
}
</script>

<template>
  <div class="container justify-content-center" v-if="loaded">
    <h2>Dettaglio progetto: {{ project.title }} </h2>
    <div>
      <span>{{ type }}</span>
      <ul class="d-flex my-4">
          <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
      </ul>
    </div>
    <p v-html="project.description"></p>

  </div>
</template>

<style lang="scss" scoped>

</style>