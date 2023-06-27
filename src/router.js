import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({

  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contatti',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/progetti',
      name: 'Projects',
      component: Projects
    }
  ]

})

export {router};