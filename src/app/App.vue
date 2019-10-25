<template>
  <div id="app">
    <div>
      <router-view />
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import MainNav from './shared/components/MainNav.vue';

export default Vue.extend({
  components: { MainNav },
});
</script>


<style lang="less">
@import "./index.less";
</style>
