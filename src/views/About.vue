<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      This is an about page.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sequi, eaque alias in quo iste delectus, recusandae voluptatum repudiandae animi excepturi quis veniam accusantium perferendis, error adipisci assumenda earum? Facere?
    </p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    dropDown() {
      console.log("Hey man, you just clicked");
    }
  }
});
</script>

