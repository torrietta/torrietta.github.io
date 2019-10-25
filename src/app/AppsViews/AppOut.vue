<template>
  <div id="Apps-Out">
    <!--  -->
    <!--  -->
    <MainNav forOut=true />
    <!--  -->
    <!--  -->
    <main>
      <!-- top -->
      <section class="Apps-Out-Page-B">
        <div class="Apps-Out-Page-Ov">
          <!--  -->
          <!--  -->
          <a-row type="flex" justify="space-around" align="middle">
            <!--  -->
            <a-col :span="10">
              <div class="Apps-Out-Page-Cont-H">
                <h1 class="Apps-Out-Page-Title">Math Spectra</h1>
                <p>
                  A smart learning platform. it provides opportunities for developing important intellectual skills
                  in critical thinking, deductive and inductive thinking,
                </p>
                <br />
                <div>
                  <router-link to="/out/login">
                      <a-button :type="'primary'">Login</a-button>
                  </router-link>
                  <router-link to="/out/signup">
                      <a-button  style="margin-left: 20px" :type="'default'">Signup</a-button>
                  </router-link>
                </div>
              </div>
            </a-col>
            <!--  -->
            <a-col :span="12" :pull="2">
              <div class="Apps-Out-Content">
                <router-view />
              </div>
            </a-col>
            <!--  -->
          </a-row>
          <!--  -->
          <!--  -->
        </div>
      </section>
      <section class="Apps-Out-Page-B Apps-Out-Page-C">
        <div class="Apps-Out-Page-Ov">
          <a-row class="Apps-Out-Content" type="flex" justify="center" align="middle">
            <!--  -->
            <!--  -->
            <a-col :span=18/3 v-for="level in levels" :key="level">
              <div class="Apps-Out-Content-Element">
                <div class="Apps-Out-Content-Element-I">
                  <img :src="level.img" />
                </div>
                <div class="Apps-Out-Content-Element-T">
                  <h1>{{level.name}}</h1>
                </div>
                 <div class="Apps-Out-Content-Element-A">
                  <h4>{{level.age}} years</h4>
                </div>
                <div class="Apps-Out-Content-Element-D">
                  <p>{{level.description}}</p>
                </div>
              </div>
            </a-col>
          </a-row>
          <!--  -->
          <!--  -->
        </div>
      </section>
      <!--  -->
    </main>
    <!--  -->
    <!-- Footer Section -->
    <div class="App-Out-Footer">
      <MainFooter />
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainFooter from "../shared/components/MainFooter.vue";
import MainNav from "../shared/components/MainNav.vue";

export default Vue.extend({
  components: { MainNav, MainFooter },
  data: ()=>{
    return {
    levels: [
      {
        img: "/assets/levels/undraw_true_friends_c94g.svg",
        name: "Beginner",
        age: "6 - 12",
        description: "Lorem, A smart learning platform. it provides opportunities for developing important intellectual skills in critical thinking, deductive and inductive thinking,"
      },
      {
        img: "/assets/levels/undraw_reading_0re1.svg",
        name: "Intermediate",
        age: "13 - 21",
        description: "Lorem, A smart learning platform. it provides opportunities for developing important intellectual skills in critical thinking, deductive and inductive thinking,"
      },
      {
        img: "/assets/levels/undraw_teacher_35j2.svg",
        name: "Advanced",
        age: "16 - Above",
        description: "Lorem, A smart learning platform. it provides opportunities for developing important intellectual skills in critical thinking, deductive and inductive thinking,"
      }
    ]
  }
  }
});
</script>

<style lang="scss" scoped>
.Apps-Out-Page-C{
  min-height: 70vh!important;
  background: rgba($color: #52e3b8, $alpha: .4)
}
#Apps-Out {
  min-height: 90vh;
}
.Apps-Out {
  &-Content {
    min-height: calc(90vh - 60px);
  }
  &-Footer {
    height: 60px;
  }
}
/* main section */
.Apps-Out-Page {
  &-B {
    min-height: calc(90vh);
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  &-Ov {
    position: relative;
    z-index: 300;
    /* opacity: 1; */
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: initial;
    /* padding-left: 10rem; */
    // color: whitesmoke;
  }
  &-Cont-H {
    /* color: #1B2130; */
    max-width: 450px;
    height: 100%;
    display: flex;
    justify-content: left;
    padding-left: 15%;
    flex-direction: column;
    text-align: left;
    margin: auto;
    p {
      font-size: 15px;
    }
  }
  .btn {
    margin-top: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
.Apps-Out-Page-Title {
  font-weight: 300;
  font-size: 3rem;
  color: #52e3b8 !important;
  font-weight: lighter;
}
.Apps-Out-Content{
  padding: 2rem 20px 2rem 20px;
  &-Element{
    padding: 20px 25px;
    img{
      width: 60%;
      height: 100px;
      object-fit: contain;
      display: block;
      margin: auto;
    }
    *{
      text-align: center;
    }
    &-T{
      color: #52e3b8;
      font-weight: 2rem;
      margin: 2rem 0px;
      margin-bottom: 0rem;
    }
    &-D{
      font-size: 90%;
    }
  }
}
</style>
