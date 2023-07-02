
<script>
  import axios from 'axios';
export default {
  data(){
    return{
      name : '',
      lastname : '',
      message : '',
      errors: {},
      sending: false,
      success: false
    }
  },

  methods : {
    sendForm(){
      this.sending = true;
            const data = {
                name: this.name,
                lastname: this.lastname,
                message: this.message,
            }

            axios.post('http://127.0.0.1:8000' + '/api/contacts', data)
                .then(result => {
                    this.sending = false;
                    this.success = result.data.success;
                    console.log(this.success, result.data);
                    if(!result.data.success){
                        this.errors = result.data.errors;
                    }else{
                        this.errors = {};
                    }
                })
    }
  }
}
</script>

<template>
<div class="container">
  
    <form v-if="!success" @submit.prevent="sendForm">
        
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" class="form-control" id="name" placeholder="Inserisci nome" v-model="name">
        </div>
        
        <div class="mb-5">
          <label for="lastname" class="form-label">Cognome</label>
          <input type="text" class="form-control" id="lastname" placeholder="Inserisci cognome" v-model="lastname">
        </div>

        <div class="form-floating mb-3">
          <span>Inserisci un messaggio</span>
          <textarea class="form-control" placeholder="Leave a comment here" id="message" v-model="message"></textarea>
        </div>
        
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>

    <div v-else><h2 class="success">Form inviato correttamente</h2></div>
</div> 
</template>

<style>

</style>