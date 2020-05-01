<template>
  <section class>
    <div class="container">
      <div
        class="mcolumns pt-5 has-background-light"
        style="padding-top:20rem; padding-left:12rem !important"
      >
        <div class="columns is-multiline">
          <!-- <div class="column is-1"></div> -->
          <div class="column is-3">
            <div class="notification has-background-white">
              <h3 class>Current Loan</h3>
              <h3 class="title">#0.00</h3>
            </div>
          </div>

          <div class="column is-3">
            <div class="notification has-background-white">
              <h3 class="is-light">Next Payment</h3>
              <h3 class="title">#1,000.00</h3>
            </div>
          </div>

          <div class="column is-3">
            <div class="notification has-background-white">
              <h3 class>Loan</h3>
              <h3 class="title">#2,200.00</h3>
            </div>
          </div>
          <div class="column is-1"></div>
          <!-- table -->
        </div>

             <button class="button is-primary mx-2 is-pulled-right">Apply For Loan</button>
            <button class="button is-primary is-outlined is-pulled-right">Apply For Loan</button>

        <div class="columns">
          <div class="column  has-background-white is-9">
           
            <!-- <div >
              <b-field>
                <b-input v-model="firstname" placeholder="Enter your first name..." type="text">
                </b-input>
              </b-field>
            </div> -->

            <div>
                <h3 class=" has-text-centered title is-4 is-marginless is-paddingless">Loans can only be used </h3>
                <h3  class="has-text-centered title is-4 is-marginless is-paddingless">to shop at our accredited stores</h3>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const data = [
      {
        id: 1,
        first_name: "Jesse",
        last_name: "Simmons",
        date: "2016/10/15 13:43:27",
        gender: "Male"
      },
      {
        id: 2,
        first_name: "John",
        last_name: "Jacobs",
        date: "2016/12/15 06:00:53",
        gender: "Male"
      },
      {
        id: 3,
        first_name: "Tina",
        last_name: "Gilbert",
        date: "2016/04/26 06:26:28",
        gender: "Female"
      },
      {
        id: 4,
        first_name: "Clarence",
        last_name: "Flores",
        date: "2016/04/10 10:28:46",
        gender: "Male"
      },
      {
        id: 5,
        first_name: "Anne",
        last_name: "Lee",
        date: "2016/12/06 14:38:38",
        gender: "Female"
      }
    ];
    return {
      open: true,
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
.columns {
  width: 100vw;
}
</style>