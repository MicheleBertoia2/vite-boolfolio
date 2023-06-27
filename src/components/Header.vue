
<script>
export default {
  name: 'Header'  
}
</script>

<template>
  <header>
    <ul>
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'Contacts'}">Contatti</router-link></li>
      <li><router-link :to="{name: 'Projects'}">Progetti</router-link></li>
    </ul>
  </header>
  
</template>

<style lang="scss" scoped>

</style>