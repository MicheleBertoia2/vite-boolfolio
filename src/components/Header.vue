
<script>
export default {
  name: 'Header'  
}
</script>

<template>
  <header>
    <ul class="d-flex my-5 mx-5 justify-content-evenly">
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'Contacts'}">Contatti</router-link></li>
      <li><router-link :to="{name: 'Projects'}">Progetti</router-link></li>
    </ul>
  </header>
  
</template>

<style lang="scss" scoped>
  ul{
    list-style: none;
    li{
      a{
        text-decoration: none;
        color:  white;
        font-weight: bold;
        font-size: 2rem;
        &:hover, &.active{
          color: lightblue;
        }
      }
    }
  }
</style>