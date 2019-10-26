<template>
  <!--  -->
  <div>
           <div v-for="subject in subjects" :key="subject" class="subj-h">
                <div class="subj-h-t" :style="{backgroundImage: `url(${subject.img})`}">
                    <div class="overlay">
                        <h1>
                            <router-link :to="`subjects/${subject.name}`">
                                <a>{{subject.name}}</a>
                            </router-link>
                        </h1>
                        <div class="info">
                            <span>3 topics, 3 quizes</span>
                            <span>Coverred 3 topics</span>
                        </div>
                    </div>
                </div>
                <div class="subj-h-b">
                    <p>
                        A site of this type will need a home page with links to all the modules from last trimester i.e.
                        Multiplication, Substraction, Divisions and addition
                        1. Each module should have a page giving a brief overview of the subject and the topics covered.
                        These pages should also allow access to quizzes on different topics. The site will require a
                        clearly laid out interface and an attractive design to keep students engaged.
                    </p>
                    <span class="students-info">100 Students enrolled</span>
                </div>
            </div>
  </div>
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
          img: "/assets/images/addition.jpg",
          topics: 3,
          quizes: 3,
          covered: 3
        },
        {
          name: "Subtraction",
          img: "/assets/images/substraction.jpg",
          topics: 6,
          quizes: 5,
          covered: 2
        },
        {
          name: "Division",
          img: "/assets/images/division.jpg",
          topics: 5,
          quizes: 2,
          covered: 7
        },
        {
          name: "Multiplication",
          img: "/assets/images/multiplication.jpg",
          topics: 10,
          quizes: 5,
          covered: 7
        },
        {
          name: "Problem Solving",
          img: "/assets/images/addition.jpg",
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

</style>