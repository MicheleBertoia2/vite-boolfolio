import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Contacts from './pages/Contacts.vue';
import Projects from './pages/Projects.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({

  history: createWebHistory(),
  linkExactActiveClass : 'active',

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
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'ProjectDetail',
      component: ProjectDetail
    },
  ]

})

export {router};