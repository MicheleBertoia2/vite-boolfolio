
<script>
export default {
  name: 'Card',

  props:{
    project:Object
  },

  computed:{
    type(){
      return (this.project.type) ? this.project.type.name : 'Nessun tipo di progetto presente'
    }
  }
  
}
</script>

<template>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <span>{{ type }}</span>
    <ul class="d-flex my-4">
        <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
    </ul>
  </div>
</div>
  
</template>

<style lang="scss" scoped>
  span{
    display: inline-block;
    background-color: violet;
    border-radius: 5px;
    padding: 5px;
    margin: 10px 0;
  }
  ul{
    list-style: none;
    padding: 0;
    li{
      margin-right: 5px;
      background-color: rgb(45, 148, 199);
      padding: 5px;
      font-size: .7rem;
    }
  }
</style>