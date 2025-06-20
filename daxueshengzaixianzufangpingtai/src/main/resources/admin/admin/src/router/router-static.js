import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baoxiu from '@/views/modules/baoxiu/list'
    import baoxiuCommentback from '@/views/modules/baoxiuCommentback/list'
    import dictionary from '@/views/modules/dictionary/list'
    import fangdong from '@/views/modules/fangdong/list'
    import fangwu from '@/views/modules/fangwu/list'
    import fangwuCollection from '@/views/modules/fangwuCollection/list'
    import fangwuLiuyan from '@/views/modules/fangwuLiuyan/list'
    import fangwuYuyue from '@/views/modules/fangwuYuyue/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import liuyan from '@/views/modules/liuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaoxiu from '@/views/modules/dictionaryBaoxiu/list'
    import dictionaryBaoxiuYesno from '@/views/modules/dictionaryBaoxiuYesno/list'
    import dictionaryBaoxiuZhuangtai from '@/views/modules/dictionaryBaoxiuZhuangtai/list'
    import dictionaryFangwu from '@/views/modules/dictionaryFangwu/list'
    import dictionaryFangwuCollection from '@/views/modules/dictionaryFangwuCollection/list'
    import dictionaryFangwuYuyueYesno from '@/views/modules/dictionaryFangwuYuyueYesno/list'
    import dictionaryFangwuZhuangtai from '@/views/modules/dictionaryFangwuZhuangtai/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaoxiu',
        name: '报修类型',
        component: dictionaryBaoxiu
    }
    ,{
        path: '/dictionaryBaoxiuYesno',
        name: '申请状态',
        component: dictionaryBaoxiuYesno
    }
    ,{
        path: '/dictionaryBaoxiuZhuangtai',
        name: '报修状态',
        component: dictionaryBaoxiuZhuangtai
    }
    ,{
        path: '/dictionaryFangwu',
        name: '房屋类型',
        component: dictionaryFangwu
    }
    ,{
        path: '/dictionaryFangwuCollection',
        name: '收藏表类型',
        component: dictionaryFangwuCollection
    }
    ,{
        path: '/dictionaryFangwuYuyueYesno',
        name: '报名状态',
        component: dictionaryFangwuYuyueYesno
    }
    ,{
        path: '/dictionaryFangwuZhuangtai',
        name: '房屋状态',
        component: dictionaryFangwuZhuangtai
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baoxiu',
        name: '报修',
        component: baoxiu
      }
    ,{
        path: '/baoxiuCommentback',
        name: '报修评价',
        component: baoxiuCommentback
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/fangdong',
        name: '房东',
        component: fangdong
      }
    ,{
        path: '/fangwu',
        name: '房屋',
        component: fangwu
      }
    ,{
        path: '/fangwuCollection',
        name: '房屋收藏',
        component: fangwuCollection
      }
    ,{
        path: '/fangwuLiuyan',
        name: '房屋留言',
        component: fangwuLiuyan
      }
    ,{
        path: '/fangwuYuyue',
        name: '房屋租赁',
        component: fangwuYuyue
      }
    ,{
        path: '/forum',
        name: '租房论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告信息',
        component: gonggao
      }
    ,{
        path: '/liuyan',
        name: '留言板',
        component: liuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
