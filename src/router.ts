import Vue from 'vue';
import Router from 'vue-router';
import Route from '@/types/route';

import Landingpage from './views/Landingpage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: Route.Landingpage,
    component: Landingpage,
  },
  {
    path: '/game',
    redirect: '/game/join',
  },
  {
    path: '/create-game',
    name: Route.GameCreate,
    component: () => import('@/views/GameCreate.vue'),
  },
  {
    path: '/join-game',
    name: Route.GameJoin,
    component: () => import('@/views/GameJoin.vue'),
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('@/views/Game.vue'),
    children: [
      {
        path: 'lobby',
        name: Route.GameLobby,
        component: () => import('@/views/GameLobby.vue'),
      },
      {
        path: 'info',
        name: Route.GameInfo,
        component: () => import('@/views/GameInfo.vue'),
      },
      {
        path: 'nominate',
        name: Route.GameNominate,
        component: () => import('@/views/GameNominate.vue'),
      },
      {
        path: 'vote',
        name: Route.GameVote,
        component: () => import('@/views/GameVote.vue'),
      },
      //     {
      //       path: 'vote-result',
      //       name: 'vote-result',
      //       component: require('./views/GameVoteResult.vue').default,
      //     },
      //     {
      //       path: 'president-select-policy',
      //       name: 'president-select-policy',
      //       component: require('./views/GamePresidentSelectPolicy.vue').default,
      //     },
      //     {
      //       path: 'chancellor-select-policy',
      //       name: 'chancellor-select-policy',
      //       component: require('./views/GameChancellorSelectPolicy.vue').default,
      //     },
      //     {
      //       path: 'game-over',
      //       name: 'game-over',
      //       component: require('./views/GameWon.vue').default,
      //     },
      //     // Special President Powers
      //     {
      //       path: 'eliminate-player',
      //       name: 'eliminate-player',
      //       component: require('./views/GameKillPlayer.vue').default,
      //     },
      //     {
      //       path: 'investigate',
      //       name: 'investigate',
      //       component: require('./views/GameInvestigate.vue').default,
      //     },
      //     {
      //       path: 'is-eliminated',
      //       name: 'is-eliminated',
      //       component: require('./views/GameIsKilled.vue').default,
      //     },
      //     {
      //       path: 'policy-peek',
      //       name: 'policy-peek',
      //       component: require('./views/GamePolicyPeek.vue').default,
      //     },
    ],
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
