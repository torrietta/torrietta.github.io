<template>
  <div class="ListElement-h">
    <div class="ListElement">
      <div>{{todo}}</div>
      <button v-on:click="deleteTodo" class="btn btn-cyan-5">
        <div class="mdi mdi-15px mdi-delete"></div>
      </button>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    todo: String,
    index: Number
  },
  methods:{
    deleteTodo(){
      this.$emit("deleteTodo", this.index);
    }
  }
});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ListElement-h:not(:last-of-type) {
  .divider {
    border: 0.5px solid #eee;
    width: 100%;
    margin: 0px auto;
  }
}

.ListElement {
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  button {
    opacity: 0;
    transition: 300ms ease-in opacity;
  }
  &:hover {
    background: $cyan-5;
    transition: 300ms ease;
    button {
      opacity: 1;
    }
  }
}
</style>
