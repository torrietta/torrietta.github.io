import Vue from 'vue';
import Router from 'vue-router';
/**
 *
 */
import { Button } from 'ant-design-vue';
import { Row, Col, Checkbox, Form, Icon, Input} from "ant-design-vue";

/**
 *
 * Load pages
 */
import AppIn from './app/AppsViews/AppIn.vue';
import AppOut from './app/AppsViews/AppOut.vue';
/**
 * Home out
 */
import LoginPage from './app/views/HomeOut/Login.vue';
import MainHomeOutPage from './app/views/HomeOut/MainOut.vue';
import SignupPage from './app/views/HomeOut/Signup.vue';
/**
 * In
 */
import QuizPage from './app/views/Quiz/MainQuiz.vue';
import Quiz2 from './app/views/Quiz/Quiz2.vue';
import Quiz3 from './app/views/Quiz/Quiz3.vue';

import SubjectPage from './app/views/Subject.vue';
import SubjectsPage from './app/views/Subjects.vue';
import ContactPage from './app/views/Contact.vue';
/**
 * Ant
 * Modules
 */
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Checkbox);
import { Layout, Menu,Radio} from "ant-design-vue";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Radio);
/**
 * Rouuter
 */
Vue.use(Router);

/**
 * Export
 */
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /**
     *
     *
     */
    {
      path: '/out',
      name: 'AppOut',
      component: AppOut,
      children: [
        {
          path: '',
          name: '',
          component: MainHomeOutPage,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignupPage,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactPage,
        },
      ],
    },
    /**
     *
     */
    {
      path: '',
      name: 'AppIn',
      component: AppIn,
      children: [
        {
          path: 'subjects',
          name: 'SUbjects',
          component: SubjectsPage,
        },
        {
          path: 'subjects/:id',
          name: 'SUbject',
          component: SubjectPage,
        },
        {
          path: 'quiz/1',
          name: 'QuizPage',
          component: QuizPage,
        },
        {
          path: 'quiz/2',
          name: 'QuizPage',
          component: Quiz2,
        },
        {
          path: 'quiz/3',
          name: 'QuizPage',
          component: Quiz3,
        },
        {
          path: '',
          name: 'else',
          redirect: 'out/login',
        },
      ],
    },

  ],
});
