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
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
              mode="inline"
              :defaultSelectedKeys="['1']"
              :defaultOpenKeys="['sub1']"
              :style="{ height: '100%', borderRight: 0 }"
            >
              <a-sub-menu key="sub1">
                <span slot="title">
                  <a-icon type="user" />subnav 1
                </span>
                <a-menu-item key="1">option1</a-menu-item>
                <a-menu-item key="2">option2</a-menu-item>
                <a-menu-item key="3">option3</a-menu-item>
                <a-menu-item key="4">option4</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title">
                  <a-icon type="laptop" />subnav 2
                </span>
                <a-menu-item key="5">option5</a-menu-item>
                <a-menu-item key="6">option6</a-menu-item>
                <a-menu-item key="7">option7</a-menu-item>
                <a-menu-item key="8">option8</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <span slot="title">
                  <a-icon type="notification" />subnav 3
                </span>
                <a-menu-item key="9">option9</a-menu-item>
                <a-menu-item key="10">option10</a-menu-item>
                <a-menu-item key="11">option11</a-menu-item>
                <a-menu-item key="12">option12</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout style="padding: 0 24px 24px">
            <a-layout-content
              :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
            >
              <router-view />
            </a-layout-content>
          </a-layout>
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

export default Vue.extend({
  components: { MainNav, MainFooter }
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

