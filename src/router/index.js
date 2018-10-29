import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import QuestInfo from '@/components/QuestInfo'
import QuestNotFound from '@/components/QuestNotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/:alias/:globalId',
      name: 'QuestInfo',
      component: QuestInfo
    },
    {
      path: '/quest_not_found',
      name: 'QuestNotFound',
      component: QuestNotFound
    }
  ]
})
