
<script>
export default {
  name: 'Card',

  props:{
    project:Object
  }
  
}
</script>

<template>

<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" :alt="project.title">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.description }}</p>
  </div>
</div>
  
</template>

<style lang="scss" scoped>

</style>