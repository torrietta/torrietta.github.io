<template>
  <div id="nav">
    <!-- main nav header -->
    <header class="header-h header-h-unscrolled">
      <div class="Nav-H">
        <div class="nav-logo">
          <img src="/assets/logo.svg" alt />
        </div>
        <div class="Nav-Nav">
          <div>
            <div class="nav--links">
              <ul>
                <li class="active">
                  <a class="active" href="./index.html">Home</a>
                </li>
                <li :v-if="forOut=='true'">
                  <a href="./subjects.html">Content</a>
                </li>
                <li>
                  <router-link to="/contact">
                    <a class="active">Contact</a>
                  </router-link>
                </li>
                <li :v-if="forOut !='true'">
                  <div>
                    <img />
                    <a href="#">Account</a>
                  </div>
                </li>
              </ul>
            </div>
            <!-- <div class="nav--profile">
                        <img src="" alt="">
            </div>-->
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["forOut"]
});
</script>

<style lang="less" scoped>
/* Nav-H */

.Nav-H {
  display: table;
  width: 100%;
}

.Nav-H > * {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}

.Nav-H .Nav-Nav {
  text-align: right;
}

.Nav-H .Nav-Nav ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.Nav-H .Nav-Nav ul > * {
  flex-grow: 1;
}

/* links */
.Nav-Nav ul {
  margin: 0px;
}

.Nav-Nav ul * {
  text-transform: uppercase;
}

.nav--links li {
  position: relative;
}

.nav--links li a {
  text-decoration: none;
  color: #1b2130;
  position: relative;
  display: block;
  text-align: center;
  transition: 300ms ease;
}

.nav--links li.active a {
  font-weight: bold;
  color: #52e3b8;
}

.nav--links li a:hover {
  background: whitesmoke;
}

.nav--links li.active::after {
  position: absolute;
  content: "";
  bottom: 0px;
  height: 4px;
  background: #52e3b8;
  width: 100%;
  left: 0px;
}
</style>
