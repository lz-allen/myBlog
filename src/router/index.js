import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Note from '@/views/note'
import Type from '@/views/type'
import Home from '@/views/home'
import TimeAxis from '@/views/timeAxis'
import Production from '@/views/production'
import ContentList from '@/views/contentList'
import Tools from '@/views/tools'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/index/home',
          name: 'home',
          component: Home,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: '/index/note',
          name: 'note',
          component: Note
        },
        {
          path: '/index/type',
          name: 'type',
          component: Type,
          meta: {
            keepAlive: true // 需要被缓存
          }
        },
        {
          path: '/index/contentList',
          name: 'contentList',
          component: ContentList
        },
        {
          path: '/index/timeAxis',
          name: 'timeAxis',
          component: TimeAxis
        },
        {
          path: '/index/production',
          name: 'production',
          component: Production
        },
        {
          path: '/index/tools',
          name: 'tools',
          component: Tools
        },
        {
          path: '/index/about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
