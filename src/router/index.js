import Vue from 'vue'
import VueRouter from 'vue-router'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  {
    path: '/film',
    component: () => import('../views/HomeView'),
    children: [
      {
        path: '/film/nowplaying',
        component: () => import('../pages/film/NowPlaying')
      },
      {
        path: '/film/comingsoon',
        component: () => import('../pages/film/ComingSoon')
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/film/stagephoto',
    component: () => import('../pages/film/StagePhoto')
  },
  {
    path: '/detail/:id',
    component: () => import('../pages/film/DetailFilm')
  },
  {
    path: '/cate',
    component: () => import('../pages/film/TestView')
  },
  {
    path: '/cinema',
    component: () => import('../views/CinemaView')
  },
  {
    path: '/city',
    component: () => import('../pages/cinema/CityList')
  },
  {
    path: '/info',
    component: () => import('../views/InfoView')
  },
  {
    path: '/my',
    component: () => import('../views/MyView')
  },
  {
    path: '/login',
    component: () => import('../pages/my/UserLogin')
  },
  {
    path: '/center',
    component: () => import('../pages/my/UserCenter')
  },
  {
    path: '/center/setting',
    component: () => import('../pages/my/CenSetting')
  },
  {
    path: '/help',
    component: () => import('../pages/my/CenHelp')
  },
  {
    path: '/user/order',
    component: () => import('../pages/my/UserOrder')
  },
  {
    path: '/user/redPacket',
    component: () => import('../pages/my/RedPacket')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // const pathArr = ['/user/order', '/user/redPacket', '/help', '/center/setting']
  const pathArr = []
  if (pathArr.includes(to.path)) {
    if (!localStorage.getItem('loginInfo')) {
      Toast.fail('请先登录')
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
