<template>
  <!--  -->
  <!--  -->
  <!--  -->
  <a-menu
    mode="inline"
    :defaultSelectedKeys="['1']"
    :defaultOpenKeys="['sub1']"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <!--  -->
    <a-menu-item class="Menu-Sub-Item" v-for="subject in subjects" :key="subject">
      <div>
        <div class="Menu-Sub-Name">{{subject.name}}</div>
        <div class="Menu-Sub-Topics">{{subject.topics}} Topics, {{subject.quizes}} quizes</div>
        <div class="Menu-Sub-Covered">{{subject.covered}} Covered</div>
      </div>
    </a-menu-item>
    <!--  -->
  </a-menu>
  <!--  -->
  <!--  -->
  <!--  -->
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => {
    return {
      subjects: [
        {
          name: "Addition",
          topics: 3,
          quizes: 3,
          covered: 3
        },
        {
          name: "Subtraction",
          topics: 6,
          quizes: 5,
          covered: 2
        },
        {
          name: "Division",
          topics: 5,
          quizes: 2,
          covered: 7
        },
        {
          name: "Multiplication",
          topics: 10,
          quizes: 5,
          covered: 7
        },
        {
          name: "Problem Solving",
          topics: 12,
          quizes: 4,
          covered: 3
        }
      ]
    };
  }
});
</script>

<style lang="less">
.Menu-Sub {
  &-Item {
    height: auto !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    * {
      line-height: 1rem;
    }
  }
  &-Name {
    font-weight: 500;
    font-size: 112%;
    color: #52e3b8 !important;
    padding: 10px 0px;
  }
  &-Topics {
    opacity: 0.7;
    color: #001529 !important;
    font-size: 90%;
  }
  &-Covered {
    opacity: 0.7;
    color: #001529 !important;
    font-size: 90%;
  }
}
</style>