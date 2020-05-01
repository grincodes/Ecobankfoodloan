<template>
  <section class="">

         <b-navbar>
                            <template slot="brand">
                                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                                <img   src="/blackecofoodbanklogo.png"/>
                                </b-navbar-item>
                            </template>
                         <template slot="start">
                                <b-navbar-item href="#">
                                    Home
                                </b-navbar-item>
                         </template> 
                    
                            <template  slot="burger">

                                    <a role="button" @click="toggleActive => lol()"  aria-label="menu" class="navbar-burger burger">
                                        <span aria-hidden="true"></span> 
                                        <span aria-hidden="true"></span> 
                                        <span aria-hidden="true"></span>
                                    </a>
                            </template>
         </b-navbar>

                        
    <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="open"
      class="is-hidden-mobile"
     
        >
        <div class="p-1 ml-3">
            <button class="button is-primary" @click="lol">Close</button>
            <img
            class="mt-5 mb-3"
            src="/blackecofoodbanklogo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
            />
            <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Overview"></b-menu-item>
            </b-menu-list>
            <b-menu-list>
                <b-menu-item
                label="Transactions"
                icon="link"
                tag="router-link"
                target="_blank"
                to="/expo"
                ></b-menu-item>
            </b-menu-list>
            <b-menu-list>
                <b-menu-item label="Loan" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
            </b-menu>
        </div>
</b-sidebar>


  <b-sidebar
      type="is-light"
      :fullheight="fullheight"
      :fullwidth="fullwidth"
      :overlay="overlay"
      :right="right"
      :open.sync="mopen"
      
     
        >
        <div class="p-1 ml-3">
            <button class="button is-primary" @click="lol">Close</button>
            <img
            class="mt-5 mb-3"
            src="/blackecofoodbanklogo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
            />
            <b-menu>
            <b-menu-list label="Menu">
                <b-menu-item icon="information-outline" label="Overview"></b-menu-item>
            </b-menu-list>
            <b-menu-list>
                <b-menu-item
                label="Transactions"
                icon="link"
                tag="router-link"
                target="_blank"
                to="/expo"
                ></b-menu-item>
            </b-menu-list>
            <b-menu-list>
                <b-menu-item label="Loan" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
                <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
            </b-menu>
        </div>
</b-sidebar>


    <div class="container is-hidden-mobile"  >
      <div class="mcolumns pt-5 has-background-light" style="padding-top:20rem; padding-left:12rem !important">
        <div class="columns is-multiline" >
            <!-- <div class="column is-1"></div> -->
          <div class="column is-3 ">
              <div class="notification has-background-white" >
                  <h3 class="">Balance</h3>
                  <h3 class="title">#0.00</h3>
              </div>
          </div>

          <div class="column is-3">
              <div class="notification has-background-white" >
                   <h3 class="is-light">Savings</h3>
                  <h3 class="title">#1,000.00</h3>
              </div>
          </div>

          <div class="column is-3 ">
              <div class="notification has-background-white" >
                   <h3 class="">Loan</h3>
                  <h3 class="title ">#2,200.00</h3>
              </div>
          </div>
              <div class="column is-1"></div>
            <!-- table -->
         
        </div>

     <div class="columns">
         <div class="column is-9">
              <b-table
                :data="isEmpty ? [] : data"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :hoverable="isHoverable"
                :loading="isLoading"
                :focusable="isFocusable"
                :mobile-cards="hasMobileCards">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="40" numeric>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column field="first_name" label="Transaction Type">
                        {{ props.row.first_name }}
                    </b-table-column>

                    <b-table-column field="last_name" label="Amount">
                        {{ props.row.last_name }}
                    </b-table-column>

                    <b-table-column field="date" label="Date" centered>
                        <span class="tag is-success">
                            {{ new Date(props.row.date).toLocaleDateString() }}
                        </span>
                    </b-table-column>

                  
                </template>

                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Nothing here.</p>
                        </div>
                    </section>
                </template>
            </b-table>
         </div>
           
        </div>

          
      </div>
    </div>

        <div>
                <mobileuserdash/>
        </div>

          
    
  
  </section>
</template>

<script>
import mobileuserdash from '~/components/mobileuserdash'
export default {
    components:{
        mobileuserdash
    },
  data() {
       const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
            ]
    return {
      open: true,
      mopen: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: false,
       data,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: false,
                hasMobileCards: true
    };
  },

  methods:{
      lol(){
        console.log('lol');
        this.fullwidth = !this.fullwidth
        this.mopen = !this.mopen
        
    }
  }
};
</script>

<style scoped>
.p-1 {
  padding: 1em;
}
.has-bg-img {
  background: url("/carosel0.jpg") center center;
  background-size: cover;
}

.mcolumns {
  
  height: 100vh;
  width: 100vw;
}
/* .columns{
   
     width: 100vw;
} */
</style>