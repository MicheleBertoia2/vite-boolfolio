
<script>
export default {
  data(){
    return{
      name : '',
      lastname : '',
      message : '',
    }
  },

  methods : {
    sendForm(){
      console.log('invio form');
    }
  }
}
</script>

<template>
<div class="container">
  
    <form @submit.prevent="sendForm">
        
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" class="form-control" id="name" placeholder="Inserisci nome" v-model="name">
        </div>
        
        <div class="mb-5">
          <label for="lastname" class="form-label">Cognome</label>
          <input type="text" class="form-control" id="lastname" placeholder="Inserisci cognome" v-model="lastname">
        </div>

        <div class="form-floating mb-3">
          <label for="message" class="text-secondary">Aggiungi un messaggio</label>
          <textarea class="form-control" placeholder="Leave a comment here" id="message" v-model="message"></textarea>
        </div>
        
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
</div> 
</template>

<style>

</style>