<template>
  <div class="Quiz-Page">
    <div>
      <div>
        <!--  -->
        <div>
          <div class="Quiz-Title">
            <div>Quiz 2</div>
          </div>
          <!--  -->
          <form class="Quiz-Q" id="quiz" name="quiz">
            <!--  -->
            <!--  -->
            <div v-for="(question, index) in quiz" :key="index">
              <div class="Quiz-Quest">
                <div class="Quiz-Quest-Txt">{{question.text}}</div>
                <div>
                  <a-radio-group @change="onChange" v-model="value">
                    <a-radio
                      class="M-Ans"
                      v-for="(answer, ind) in question.answers"
                      :key="ind"
                      :style="radioStyle"
                      :value="answer.value"
                      :name="question.text"
                    >{{answer.label}}</a-radio>
                  </a-radio-group>
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
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      quiz: [
        {
          text: "52 + ? = 100",
          answers: [
            {
              label: 48,
              value: 48
            },
            {
              label: 50,
              value: 50
            }
          ],
          answer: 48
        },
        {
          text: "? + 477 = 600",
          answers: [
            {
              label: 33,
              value: 33
            },
            {
              label: 133,
              value: 133
            }
          ],
          answer: 133
        },
        {
          text: "80 + 90 = ?",
          answers: [
            {
              label: 170,
              value: 170
            },
            {
              label: 150,
              value: 150
            }
          ],
          answer: 170
        },
        {
          text: "25 + ? = 70",
          answers: [
            {
              label: 55,
              value: 55
            },
            {
              label: 35,
              value: 35
            },
            {
              label: 45,
              value: 45
            }
          ],
          answer: 45
        },
        {
          text: " ? + 45 = 302",
          answers: [
            {
              label: 257,
              value: 257
            },
            {
              label: 207,
              value: 207
            },
            {
              label: 157,
              value: 157
            },
            {
              label: 247,
              value: 247
            }
          ],
          answer: 257
        }
      ]
    };
  },
  methods: {}
});
</script>

<style lang="scss" scoped>
.Quiz-Page {
  background: #fff;
  border-radius: 4px;
  width: 95vh;
}
.Quiz-Title {
  padding: 20px 40px;
  background: rgba(#52e3b8, 0.2);
  font-weight: bold;
  text-align: center;
  font-size: 110%;
  color: #52e3b8;
}
.Quiz-Q {
  padding: 20px 40px;
  padding-top: 5px;
}
.Quiz-Quest {
  padding: 10px 0px;
  padding-top: 15px;
}
.Quiz-Quest-Txt {
  font-size: 105%;
  font-weight: bold;
}
</style>