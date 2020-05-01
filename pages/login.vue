<template>

    <section>
        <div class="columns is-centered">
            <div class="column is-10 is-half">
                
                <div class="hero is-fullheight">

        
        <div class="hero-body">
                  
                <div class="container has-text-centered is-centered is-vcentered">
                        <!-- <h3 class="title is-1 is-size-5-mobile">Fudap Checkout</h3> -->
                    <b-tabs position="is-centered" type="is-boxed" v-model="activeTab">
                            <b-tab-item label="Login">
                                     <div >
                      
                            
                            <h3 class="title is-size-3-mobile is-1 has-text-dark is-marginless has-text-weight-bold has-text-centered ">
                                Welcome back!
                            </h3>
                              <h3 class="mt-2 is-size-7-mobile">We knw that you cant wait to get your order </h3>
                                <p class="is-size-7-mobile">... and we dont intend to keep you any longer </p>
                            <div class="columns has-text-centered is-centered is-vcentered">
                                <div class="column is-4" style="margin: 34px 0px;">
                                     <div v-if="loginerror" class="notification is-primary">
                                            {{loginerror}}
                                        </div>

                                    <b-field>
                                            <b-input v-model="email"   placeholder="Enter your email..." type="email"></b-input>
                                    </b-field>
                                        <b-field>
                                            <b-input v-model="password" type="password"
                                                placeholder="Password reveal input"
                                                password-reveal>
                                            </b-input>
                                    </b-field>
                                    <b-button @click="login" expanded class="is-primary">Login</b-button>
                                </div>

                        </div>

                        
                       
                    </div>
                </b-tab-item>

            <b-tab-item label="Sign up">
                <div >
                        <h3 class="title is-1 is-size-2-mobile has-text-dark is-marginless has-text-weight-bold has-text-centered">
                            Sign up!
                        </h3>
                         <h3 class="mt-2 is-size-7-mobile">We knw that you cant wait to get your order </h3>
                         <p class="mt-2 is-size-7-mobile">... and we dont intend to keep you any longer </p>
                            
                             
                                <div class="columns has-text-centered is-centered is-vcentered">
                                    <div class="column is-4" style="margin: 34px 0px;">
                                        <div v-if="signuperror" class="notification is-primary">
                                            {{signuperror}}
                                        </div>
                                        <b-field>
                                                <b-input v-model="firstname"   placeholder="Enter your first name..." type="text"></b-input>
                                        </b-field>
                                        <b-field>
                                                <b-input v-model="lastname"   placeholder="Enter your surname..." type="text"></b-input>
                                        </b-field>
                                        <b-field>
                                                <b-input v-model="email"   placeholder="Enter your email..." type="email"></b-input>
                                        </b-field>
                                            <b-field>
                                                <b-input v-model="password" type="password"
                                                    placeholder="Password reveal input"
                                                    password-reveal
                                                   >
                                                </b-input>
                                        </b-field>
                                        <b-button expanded class="is-primary" @click="register">Sign up</b-button>
                                    </div>
                                </div>
                            

                    </div>
              
            </b-tab-item>

            </b-tabs>

                </div>
          
        </div>
    </div>

            </div>
        </div>

    </section>

</template>

<script>
export default {
      data(){
        return{
           
            activeTab:0,
            email:'',
            password:'',
            usertype:'user',
            firstname:'',
            lastname:'',
            isLogin:true,
            signupEmail:false,
            loginEmail:false,
            loginerror:null,
            signuperror:null
        }
    },

    methods:{
         async register() {



              try {
                   await this.$axios.post('/api/register', {
                        email: this.email,
                        password: this.password,
                        usertype:this.usertype,
                        firstname:this.firstname,
                        lastname:this.lastname,
                        })

                await   this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password,
                        usertype:this.usertype
                        
                    },
                    })

                    this.$router.push('/createprofileauth')
            }
            catch(err){
                this.signuperror = JSON.stringify(err.response.data.message)
                // this.error = e
                
                console.log(this.error);
            }

     
    
         },

         async login(){
               

             try{
                 this.$auth.logout
                    let res = await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password,
                        usertype:this.usertype
                        
                    },
                    })

                    console.log(res);
    
                   
                    this.$router.push('/billing')
             }
             catch(err){
                //  this.error = e
                this.loginerror = JSON.stringify(err.response.data.message)
                 console.log(err);
                 
             }
             
         }
    }

}
</script>