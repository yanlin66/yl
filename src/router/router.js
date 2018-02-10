import App from '../App';

const loading = r => require.ensure([], () => r(require('../page/index/loading')), 'loading');
const index = r => require.ensure([], () => r(require('../page/index/index')), 'index');

//活动一：踢球得门票
const firstone = r => require.ensure([], () => r(require('../page/first/one')), 'firstone');
const firsttwo = r => require.ensure([], () => r(require('../page/first/two')), 'firsttwo');
const firstthree= r => require.ensure([], () => r(require('../page/first/three')), 'firstthree');
const firstyes=r => require.ensure([], () => r(require('../page/first/yes')), 'firstyes');
const firstno=r => require.ensure([], () => r(require('../page/first/no')), 'firstno');
const firstform=r => require.ensure([], () => r(require('../page/first/form')), 'firstform');

//活动二：定时抽奖
const secondone = r => require.ensure([], () => r(require('../page/second/one')), 'secondone');
const nostart = r => require.ensure([], () => r(require('../page/second/nostart')), 'nostart');
const whyprize = r => require.ensure([], () => r(require('../page/second/why')), 'whyprize');
const noprize = r => require.ensure([], () => r(require('../page/second/noprize')), 'noprize');
const oneprize = r => require.ensure([], () => r(require('../page/second/oneprize')), 'oneprize');
const twoprize = r => require.ensure([], () => r(require('../page/second/twoprize')), 'twoprize');
const threeprize = r => require.ensure([], () => r(require('../page/second/threeprize')), 'threeprize');

//个人中心
const prize =r => require.ensure([], () => r(require('../page/home/prize')), 'prize');
const logistics =r => require.ensure([], () => r(require('../page/home/logistics')), 'logistics');
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
      {
        path: '',
        redirect: '/loading'
      },
      //loading
      {
        path: '/loading',
        component: loading
      },
      //首页
      {
        path: '/index',
        component: index
      },
      //第一个活动
      {
        path: '/firstone',
        component: firstone
      },
      {
        path: '/firsttwo',
        component: firsttwo
      },
      {
        path:'/firstthree',
        component: firstthree
      },
      {
        path:'/firstyes',
        component: firstyes
      },
      {
        path:'/firstno',
        component: firstno
      },
      {
        path:'/firstform',
        component:firstform
      },

      //活动二
      {
        path:'/secondone',
        component:secondone
      },
      {
        path:'/nostart',
        component:nostart
      },
      {
        path:'/whyprize',
        component:whyprize
      },
      {
        path:'/noprize',
        component:noprize
      },
      {
        path:'/oneprize',
        component:oneprize
      },
      {
        path:'/twoprize',
        component:twoprize
      },
      {
        path:'/threeprize',
        component:threeprize
      },

      //奖品中心
      {
        path:'/prize',
        component:prize
      },
      {
        path:'/logistics',
        component:logistics
      }
    ]
}]
