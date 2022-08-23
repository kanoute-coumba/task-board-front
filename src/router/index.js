import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import Task from '../views/Task.vue'
import Todo from '../views/Todo.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: Inscription
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/task/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
