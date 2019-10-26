<template>
    <div>
                    <div class="subj-h subj-view">
                <div class="subj-h-t" style="background-image: url('/assets/images/addition.jpg')">
                    <div class="overlay">
                        <h1>
                            <a href="./subject.html">
                                Week 1: Intermediate Addition
                            </a>
                        </h1>
                        <div class="info">
                            <span>3 quizes</span>
                            <span>50% Score</span>
                        </div>
                    </div>
                </div>
                <div class="subj-h-b">
                    <div class="subj-quiz-btns">
                        <router-link to="/quiz/1">
                            Quiz 1
                        </router-link>
                        <router-link to="/quiz/2">
                            Quiz 2
                        </router-link>
                        <router-link to="/quiz/3">
                            Quiz 3
                        </router-link>
                    </div>
                    <p>
                        A site of this type will need a home page with links to all the modules from last trimester i.e.
                        Multiplication, Substraction, Divisions and addition
                        1. Each module should have a page giving a brief overview of the subject and the topics covered.
                        These pages should also allow access to quizzes on different topics. The site will require a
                        clearly laid out interface and an attractive design to keep students engaged.
                    </p>
                    <p>
                        Instructors can limit which content items you see based on date, time, individual users, course
                        groups, and your performance on graded items. For example, your instructor restricts access to
                        the next assignment until you complete a test. Your instructor can also require that the
                        assignment doesn't appear until you complete the test and score at least 70 percent.Ask your
                        instructor about content that you think may not appear
                        for you but should. You might have to meet specific criteria.
                    </p>
                    <span class="students-info">100 Students enrolled</span>
                </div>
            </div>
    </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
})
</script>

<style>
</style>