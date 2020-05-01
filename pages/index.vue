<template>
  <section>
    <Nav />

    <div class="hero is-fullheight is-clipped is-white is-hidden-mobile">
      <b-carousel >
        <b-carousel-item v-for="(item, i) in 3" :key="i">
          <div class="hero-body is-paddingless ">
            <div class="mcolumns is-gapless is-desktop is-vcentered">
              <div class="column pl-3" style="align-items:center!important">
                    <!-- style="align-items: center!important" -->
                
                             <h1 class=" my-5 mx-4 title is-1">{{items[i].title}}</h1>
                             <div>
                                 <button class="mx-4 is-large is-primary   i  button ">Get Started</button>
                             </div>
                            
              </div>
              <div class="column is-flex " :style="getClass(i)" >
              </div>
            </div>
          </div>

        </b-carousel-item>
      </b-carousel>

    </div>

     <div class="hero is-fullheight  is-white is-hidden-desktop">
      <b-carousel >
        <b-carousel-item v-for="(item, i) in 3" :key="i">
          <div class="hero-body is-paddingless ">
            <div class="scolumns " >
             
              <div class="topcolumn  " :style="getClass(i)" >
                            <!-- <h1 class=" my-5 mx-4 title is-1">{{items[i].title}}</h1>
                             <div>
                                 <button class=" is-large is-primary   i  button ">Get Started</button>
                             </div> -->
              </div>
               <div class="bottomcolumn has-text-centered pt-4">
            
                
                             <h1 class=" mb-2 title is-6">{{items[i].title}}</h1>
                             <div>
                                 <button class=" is-primary   i  button ">Get Started</button>
                             </div>
                            
              </div>
            </div>
          </div>

        </b-carousel-item>
      </b-carousel>

    </div>
    
    <herosmall/>
  <section>

          <h3 class="mt-5 mb-2 is-marginless has-text-centered title has-text-primary-dark1">Buy with Eco Food in 3 Easy Steps</h3>
            <p class="has-tex-gray has-text-centered">Anything you want. When you want it . how you want it</p>
            <div class="columns mt-5">
                <div class="column mx-2">
                  <div class="notification">
                      <h3 class="title is-6">-Download Eco Food Bank app on App or Google Playstore. </h3>
                  </div>
                  
                </div>
                <div class="column mx-2">
                   <div class="notification">
                  <h3 class="title is-6">-Register as a new account or with your existing Eco Bank Account.</h3>
                   </div>
                </div>
     
                <div class="column mx-2">
                   <div class="notification">
                  <h3 class="title is-6">-Use your account ID to shop across partner online stores. </h3>
                   </div>
                </div>
            </div>

  </section>
  
  </section>
</template>

<script>
import Nav from "~/components/Nav";
import herosmall from "~/components/herosmall";
export default {
  components: {
    Nav,
    herosmall
  },

  data() {
    return {

      items: [
        {
          title: "Shop what ever you want and pay later! "
        },
        {
          title: "Never run out of food supplies!",
          image: "/carosel1.jpg"
        },
        {
          title: "Stay healthy by eating regularly!",
          image: "/carosel2.jpg"
        }
      ]
    };
  },
  methods: {
    getImgUrl(value) {
      return `/carosell${value}.jpg`;
    },
    getClass(value){
       return ` background: url('/carosel${value}.jpg') center center;
         background-size: cover;
         `    
    }
  }
};
</script>

<style scoped>
.has-bg-img {
  background: url("/carosel0.jpg") center center;
  background-size: cover;
}

.mcolumns {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.scolumns {

  height: 100vh;
  width: 100vw;
}
.topcolumn{


  height: 70vh;
  width: 100vw;

}
.bottomcolumn{

  align-items: center;
  align-content: center;
  justify-content: center;
  height: 30vh;
  width: 100vw;

}
</style>


