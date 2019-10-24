<template>
  <div id="nav">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
#nav{
    display: flex;
    width: 100%;
    // padding: 10px;
    justify-content: space-around;
    border-radius: 8px;
    align-items: center;
}
.nav-link{
    padding: 10px 10px 15px 10px;
    width: 100%;
    flex-grow: 1;
    text-align: center;
    color: $dark;
}
.router-link-exact-active{
    background: $cyan-5;
    position: relative;
    border-radius: 8px;
    @include nav-active-before;
    color: $primary;
}
</style>
