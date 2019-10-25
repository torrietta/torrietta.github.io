<template>
  <div class="MainOut-Page">
    <section class="MainOut-Page-B">
      <div class="MainOut-Page-Ov">
        <!--  -->
        <a-row class="A-Row" type="flex" justify="space-around" align="middle">
          <a-col :span=24>
            <img :src="'/undraw_processing_qj6a.svg'" />
          </a-col>
        </a-row>
        <!--  -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="less" scoped>
.MainOut-Page-Ov {
  .A-Row {
    min-height: 90vh;
    height: 90vh;
    &>{
      text-align: center;
    }
  }
  img {
    width: 50%;
    margin: auto;
    // height: 100%;
  }
}
</style>
