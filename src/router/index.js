import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../components/Quiz.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: Quiz,
    },
    {
      path: '/',
      name: 'Progress',
      //route level code-splitting
      //this generates a separate chunk (About.[hash].js) for this route
      //which is lazy-loaded when the route is visited.
      component: () => import('../components/Progress.vue'),
    },
  ]
})


export default router
