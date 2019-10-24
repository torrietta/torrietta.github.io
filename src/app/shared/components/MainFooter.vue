<template>
  <div id="MainFooter">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
    <footer>

    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
#MainFooter{
  padding: 20px;
  background: rgba($color: #000000, $alpha: .04)
}
</style>
