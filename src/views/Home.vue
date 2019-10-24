<template>
  <div class="home">
    <!--  -->
    <!-- Form holder -->
    <form autocomplete="off" @submit.prevent="addTodo" action>
      <div class="form-group">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Add a todo"
            aria-label="toDoAdd"
            name="toDoAdd"
            id="toDoAdd"
            v-model="newTodo"
          >
          <span class="input-group-addon input-group-append">
            <button v-on:click="addTodo" type="button" class="btn btn-cyan-5">
              <div class="mdi mdi-plus"></div>
            </button>
          </span>
        </div>
      </div>
    </form>
    <!--  -->
    <!-- To do holder -->
    <div class="todo-holder">
      <!--  -->
      <!--  -->
      <transition name="todo-in">
        <div v-if="!todoList || todoList.length == 0">
          <div class="text-center">
            <h1>Ooops!!!</h1>
            <p>Nothing to show for now.</p>
          </div>
        </div>
      </transition>

      <div v-if="!(!todoList || todoList.length == 0)">
        <div v-for="(data, index) in todoList" :key="index">
          <transition name="todo-in">
            <ListElement
              v-if="data"
              v-on:deleteTodo="removeTodo"
              v-bind:todo="data"
              v-bind:index="index"
            />
          </transition>
        </div>
      </div>
      <!--  -->
      <!--  -->
    </div>
    <!--  -->
    <!--  -->
  </div>
</template>

<script>
import ListElement from "./../shared/components/ListElement.vue";
export default {
  name: "home",
  components: {
    ListElement
  },
  /**
   * Methods
   */
  methods: {
    addTodo() {
      if (this.newTodo.length > 4 && this.newTodo.length < 14) {
        this.todoList.unshift(this.newTodo);
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    }
  },
  /**
   * Data
   */
  data() {
    return {
      newTodo: "",
      todoList: ["Coding", "Nothing else"]
    };
  }
};
</script>


<style lang="scss" scoped>
.todo-holder {
  padding: 10px 0px;
}
@keyframes animateTodo {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.todo-in-enter-active {
  animation: animateTodo 100ms ease-in forwards;
}
.todo-in-leave-active {
  animation: animateTodo 100ms ease-in reverse;
}
</style>
