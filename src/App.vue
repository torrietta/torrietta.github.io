<template>
  <div id="app">
    <MainNav />
    <div id="contents-holder">
      <router-view/>
    </div>
  </div>
</template>


<script lang="ts">
import MainNav from "./shared/components/MainNav.vue";
import Vue from "vue";
export default Vue.extend({
  components: { MainNav, },
});
</script>


<style lang="scss">
@import "./assets/scss/extensions/materialdesignicons.css";
@import "./index.module.scss";
body {
  padding: 40px 5px;
}
#app {
  display: block;
  max-width: 500px;
  height: auto;
  background: white;
  margin: 0px auto;
  border: 1px solid lighten($dark, 65%);
  border-radius: 8px;
}
#contents-holder{
  padding: 20px 20px 20px 20px;
}
</style>
