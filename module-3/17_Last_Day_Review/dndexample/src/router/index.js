import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DragAndDrop from '../views/DragAndDropExample.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/drag-and-drop',
    name: 'drag-and-drop',
    component: DragAndDrop
  },  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

