<template>
  <div class="Quiz-Page">
    <div>
      <div>
        <!--  -->
        <div>
          <div class="Quiz-Title">
            <div>Quiz 1</div>
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
          text: "2 + 3 = ?",
          answers: [
            {
              label: 5,
              value: 5
            },
            {
              label: 6,
              value: 6
            },
            {
              label: 1,
              value: 1
            }
          ],
          answer: "5"
        },
        {
          text: " 4 + 6 = ?",
          answers: [
            {
              label: 9,
              value: 9
            },
            {
              label: 10,
              value: 10
            }
          ],
          answer: "10"
        },
        {
          text: " ? + 6 = 8?",
          answers: [
            {
              label: 3,
              value: 3
            },
            {
              label: 2,
              value: 2
            }
          ],
          answer: "2"
        },
        {
          text: "9 + ? = 16",
          answers: [
            {
              label: 8,
              value: 8
            },
            {
              label: 9,
              value: 9
            },
            {
              label: 7,
              value: 7
            }
          ],
          answer: "7"
        },
        {
          text: "7 + 9 = ?",
          answers: [
            {
              label: 18,
              value: 18
            },
            {
              label: 20,
              value: 20
            },
            {
              label: 16,
              value: 16
            },
            {
              label: 15,
              value: 15
            }
          ],
          answer: 16
        }
      ]
    };
  },
  methods: {}
});
</script>

<style lang="scss">
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