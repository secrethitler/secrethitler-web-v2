import Vue from 'vue';
import Router from 'vue-router';
import Routes from '@/types/routes';

import Landingpage from './views/Landingpage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: Routes.Landingpage,
    component: Landingpage,
  },
  {
    path: '/game',
    redirect: '/game/join',
  },
  {
    path: '/create-game',
    name: Routes.GameCreate,
    component: () => import('@/views/GameCreate.vue'),
  },
  {
    path: '/join-game',
    name: Routes.GameJoin,
    component: () => import('@/views/GameJoin.vue'),
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('@/views/Game.vue'),
    children: [
      {
        path: 'lobby',
        name: Routes.GameLobby,
        component: () => import('@/views/GameLobby.vue'),
      },
      //     {
      //       path: 'info',
      //       name: 'info',
      //       component: require('./views/GameInfo.vue').default,
      //     },
      //     {
      //       path: 'nominate',
      //       name: 'nominate',
      //       component: require('./views/GameNominate.vue').default,
      //     },
      //     {
      //       path: 'vote',
      //       name: 'vote',
      //       component: require('./views/GameVote.vue').default,
      //     },
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
