import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
// import ViewQuestions from '../views/ViewQuestions.vue'
// import PreviewPage from '../views/PreviewPage.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: HomePage
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
