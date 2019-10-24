<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>


<script lang="ts">
import MainNav from "./shared/components/MainNav.vue";
import Vue from "vue";
export default Vue.extend({
  components: { MainNav }
});
</script>


<style lang="less">
@import "./index.less";
</style>
