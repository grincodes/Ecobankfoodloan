<template>

    <b-navbar :spaced="spaced" type="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="~/assets/ecofoodbanklogo.png"
                    alt="Eco bank Food Logo"
                >
            </b-navbar-item>

             <!-- <img
            
                    src="~/assets/ecofoodbanklogo.png"
                    alt="Eco bank Food Logo"
                > -->
        </template>
        <template  slot="start">
         
              <b-navbar-item class="pt-3" href="#">
                Home
            </b-navbar-item>
            <b-navbar-item class="pt-3" href="#">
                Documentation
            </b-navbar-item>
      
            
            
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-inverted is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-outlined is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>

  
</template>

<script>
export default {

  

  data(){
    return{
      shadow:true,
      fixedtop:true,
      spaced:true
    }
  },

 
}
</script>

<style>
</style>