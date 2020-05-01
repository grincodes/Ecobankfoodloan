<template>
    
    <div>
          <div class="pt-3">
              <div class="columns is-centered is-mobile is-multilined has-background-light " >
    
            <!-- <div class="column is-1"></div> -->
          <div class="column  is-narrow ">
              <div class="notification has-background-white" >
                  <h3 class="">Savings</h3>
                  <h3 class="title is-6">#0.00</h3>
              </div>
          </div>

          <div class="column is-narrow">
              <div class="notification has-background-white" >
                   <h3 class="is-light">Loan</h3>
                  <h3 class="title is-6">#1,000.00</h3>
              </div>
          </div>

         
      </div>
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
</template>