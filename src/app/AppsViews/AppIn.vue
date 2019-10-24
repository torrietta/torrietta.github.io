<template>
  <div id="Apps-In">
    <!--  -->
    <div class="Apps-In-Content">
      <router-view />
    </div>
    <!-- Footer Section -->
    <div class="App-In-Footer">
      <MainFooter />
    </div>
    <!--  -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainFooter from "./../shared/components/MainFooter.vue";
import MainNav from "./../shared/components/MainNav.vue";

export default Vue.extend({
  components: { MainNav, MainFooter }
});
</script>

<style lang="scss" scoped>
#Apps-In {
  min-height: 100vh;
}
.Apps-In {
  &-Content {
    min-height: calc(100vh - 60px);
  }
  &-Footer {
    height: 60px;
  }
}
</style>
