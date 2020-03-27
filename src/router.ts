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
    component: () => import(/* webpackChunkName: "GameCreate" */ '@/views/GameCreate.vue'),
  },
  {
    path: '/join-game',
    name: Route.GameJoin,
    component: () => import(/* webpackChunkName: "GameJoin" */ '@/views/GameJoin.vue'),
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import(/* webpackChunkName: "Game" */ '@/views/Game.vue'),
    children: [
      {
        path: 'lobby',
        name: Route.GameLobby,
        component: () => import(/* webpackChunkName: "GameLobby" */ '@/views/GameLobby.vue'),
      },
      {
        path: 'info',
        name: Route.GameInfo,
        component: () => import(/* webpackChunkName: "GameInfo" */ '@/views/GameInfo.vue'),
      },
      {
        path: 'nominate',
        name: Route.GameNominate,
        component: () => import(/* webpackChunkName: "GameNominate" */ '@/views/GameNominate.vue'),
      },
      {
        path: 'vote',
        name: Route.GameVote,
        component: () => import(/* webpackChunkName: "GameVote" */ '@/views/GameVote.vue'),
      },
      {
        path: 'vote-result',
        name: Route.GameVoteResult,
        component: () => import(/* webpackChunkName: "GameVoteResult" */ './views/GameVoteResult.vue'),
      },
      {
        path: 'president-select-policy',
        name: Route.GamePresidentPolicyPick,
        component: () => import(/* webpackChunkName: "GamePresidentSelectPolicy" */ './views/GamePresidentSelectPolicy.vue'),
      },
      {
        path: 'chancellor-select-policy',
        name: Route.GameChancellorPolicyPick,
        component: () => import(/* webpackChunkName: "GameChancellorSelectPolicy" */ './views/GameChancellorSelectPolicy.vue'),
      },
      {
        path: 'game-over',
        name: Route.GameWon,
        component: () => import(/* webpackChunkName: "GameWon" */ './views/GameWon.vue'),
      },
      //     // Special President Powers
      //     {
      //       path: 'eliminate-player',
      //       name: 'eliminate-player',
      //       component: () => import(/* webpackChunkName: "GameKillPlayer" */ './views/GameKillPlayer.vue'),
      //     },
      //     {
      //       path: 'investigate',
      //       name: 'investigate',
      //       component: () => import(/* webpackChunkName: "GameInvestigate" */ './views/GameInvestigate.vue'),
      //     },
      {
        path: 'is-eliminated',
        name: Route.GameIsKilled,
        component: () => import(/* webpackChunkName: "GameIsKilled" */ './views/GameIsKilled.vue'),
      },
      {
        path: 'special-election',
        name: Route.GameSpecialElection,
        component: () => import(/* webpackChunkName: "GameSpecialElection" */ './views/GameSpecialElection.vue'),
      },
      {
        path: 'policy-peek',
        name: Route.GamePolicyPeek,
        component: () => import(/* webpackChunkName: "GamePolicyPeek" */ './views/GamePolicyPeek.vue'),
      },
    ],
  },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
