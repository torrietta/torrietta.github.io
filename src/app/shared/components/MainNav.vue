<template>
  <div id="MainNav">
    <!--  -->
    <!--  -->
    <div class="MainNav-Logo">
      <router-link to="/subjects">
        <img src="/assets/logo_dark.svg" alt="Logo" />
      </router-link>
    </div>
    <!--  -->
    <!--  -->
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item :v-if="forOut !='true'" key="1">Home</a-menu-item>
      <a-menu-item>
        <router-link to="/subjects">Subjects</router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/out/contact">Contact</router-link>
      </a-menu-item>
      <!--  -->
      <a-sub-menu v-if="!(forOut =='true')" key="sub2">
        <span slot="title">
          <span class="Menu-Account">
            <img class="Acc-Img" src="/assets/levels/undraw_reading_0re1.svg" />
            <div class="Acc-Info">
              <span class="Acc-Names">Teta Orrieta</span>
              <span>
                <span class="Acc-Level">Developing</span>
              </span>
            </div>
          </span>
        </span>
        <a-menu-item key="5">
          <router-link to="/out">Logout</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <!--  -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["forOut"]
});
</script>

<style lang="less" scoped>
.Menu-Account {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}
.Acc {
  &-Img {
    border-radius: 30px;
    height: 40px;
    width: 40px;
    object-fit: cover;
  }
  &-Info {
    padding: 10px;
  }
  &-Names {
    font-weight: bold;
    display: block;
    line-height: 1.2rem;
  }
  &-Level {
    color: aquamarine;
    font-size: 90%;
    display: block;
    line-height: 1.2rem;
  }
}
#MainNav {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.MainNav-Logo {
  img {
    height: 35px;
  }
}
</style>
