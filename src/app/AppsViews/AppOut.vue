<template>
  <div id="Apps-Out">
    <!--  -->
    <div class="Apps-Out-Content">
      <router-view />
    </div>
    <!-- Footer Section -->
    <div class="App-Out-Footer">
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
#Apps-Out {
  min-height: 100vh;
}
.Apps-Out {
  &-Content {
    min-height: calc(100vh - 60px);
  }
  &-Footer {
    height: 60px;
  }
}
</style>
