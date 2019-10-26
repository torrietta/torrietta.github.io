<template>
  <div id="Apps-In">
    <!--  -->
    <!--  -->
    <div class="Apps-In-Content">
      <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
          <MainNav forOut="false" />
        </a-layout-header>
        <a-layout>
          <a-layout-sider width="300" style="background: #fff">
            <!--  -->
            <SubjectsNav />
            <!--  -->
          </a-layout-sider>
          <!--  -->
          <!--  -->
          <!--  -->
          <a-layout style="padding: 0 24px 24px">
            <a-layout-content
              :style="{ padding: '24px', margin: 0, minHeight: 'calc(90vh - 60px)' }"
            >
              <router-view />
            </a-layout-content>
          </a-layout>
          <!--  -->
          <!--  -->
        </a-layout>
      </a-layout>
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
import MainFooter from "../shared/components/MainFooter.vue";
import MainNav from "../shared/components/MainNav.vue";
import SubjectsNav from "./LeftMenuSubjects.vue";

export default Vue.extend({
  components: { MainNav, MainFooter, SubjectsNav }
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

