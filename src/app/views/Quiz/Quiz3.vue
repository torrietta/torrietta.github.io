<template>
  <div class="Quiz-Page">
    <div>
      <div>
        <!--  -->
        <div>
          <div class="Quiz-Title">
            <div>Quiz 3</div>
          </div>
          <!--  -->
          <form class="Quiz-Q" id="quiz" name="quiz">
            <!--  -->
            <!--  -->
            <div v-for="(question, index) in quiz" :key="index">
              <div class="Quiz-Quest">
                <div class="Quiz-Quest-Txt-Sm">
                  <span class="Quiz-Quest-Num">{{index+1}}</span>
                  {{question.text}}</div>
                <div>
                  <a-input :placeholder="`Answer eg: ${index}`" :style="inputStyle">
                  </a-input>
                </div>
              </div>
            </div>
            <!--  -->
            <!--  -->
          </form>
          <div class="form-check">
            <a-button type="primary">Submit</a-button>
            <div id="results"></div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  created: () => {},
  data: () => {
    return {
      value: 1,
      inputStyle: {
        // display: "block",
        height: "40px",
        lineHeight: "40px"
      },
      quiz: [
        {
          text:
            "Katheline has 5 friends and each of his friends has 7 friends. How many friends do katherine have in total?",
          answer: 35
        },
        {
          text:
            "Ayumi puts 3 packets of ketchup on her tater tots. Each packet has 8 milliliters of ketchup. How many milliliters of ketchup does Ayumi put on her tater tots?",
          answer: 24
        },
        {
          text:
            "cows are playing soccer. green team is playing the pink team, 4 are on the green team. how many cows are in the pink team to make a total of 8 cows",
          answer: 4
        },
        {
          text:
            ".A bird laid 6 eggs in total. how many eggs remaining if 4 eggs have hatched?",
          answer: 2
        }
      ]
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.Quiz-Quest-Num{
  font-weight: bold;
}
</style>