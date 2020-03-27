import { Module } from 'vuex';
import {
  GameState, StoreRootState, Member, Round, Role, UserID, Vote, Policy,
} from '@/types/game';
import { GameJoinResponse } from '@/types/http';
import { GameStart, GameWon } from '@/types/events';
import Route from '@/types/route';

export enum mutations {
  INIT_GAME = 'initGame',
  // SET_MEMBERS = 'setMembers',
  SET_CONNECTED_MEMBERS = 'setConnectedMembers',
  START_GAME = 'startGame',
  SET_NOMINATED_CHANCELLOR = 'setNominatedChancellor',
  SET_NEXT_ROUND = 'setNextRound',
  SET_CURRENT_ACTION = 'setCurrentAction',
  ADD_VOTE = 'addVote',
  SET_CHANCELLOR_ELECTED = 'chancellorElected',
  SET_ELECTABLE = 'setElectable',
  SET_PLAYER_KILLED = 'setPlayerKilled',
  SET_CHANCELLOR_POLICIES = 'setChancellorPolicies',
  SET_PRESIDENT_POLICIES = 'setPresidentPolicies',
  INC_ELECTION_TRACKER = 'incElectionTracker',
  RESET_ELECTION_TRACKER = 'resetElectionTracker',
  SET_ENACTED_POLICY = 'setEnactedPolicy',
  SET_PEEKED_POLICIES = 'setPeekedPolicies',
  SET_GAME_WON = 'setGameWon',
  SET_VETO_POSSIBLE = 'setVetoPossible'
}

const gameStore: Module<GameState, StoreRootState> = {
  state: {
    token: undefined,
    userId: undefined,
    creatorId: undefined,
    channelName: undefined,
    roleName: undefined,

    gameOver: false,

    currentAction: Route.GameLobby,
    partyMembers: [],
    connectedMembers: [],
    members: [],
    activeRound: -1,
    rounds: [],
    killed: [],
    electionTracker: 0,

    running: false,
  } as GameState,

  getters: {
    userId: state => state.userId,
    token: state => state.token,
    channelName: state => state.channelName,
    partyMembers: state => state.partyMembers,
    connectedMembers: state => state.connectedMembers,
    rounds: state => state.rounds,
    roleName: state => state.roleName,
    electionTracker: state => state.electionTracker,
    allMembers: state => state.members,
    gameOver: state => state.gameOver,
    isDead: (state, getters) => state.killed.includes(getters.userId),

    // Ignore killed members.
    members: (state: GameState) => state.members.filter(member => state.killed.includes(member.userId) === false),

    you(state: GameState): Member | undefined {
      return state.members.find(member => member.userId === state.userId);
    },
    creator(state: GameState): Member | undefined {
      return state.members.find(member => member.userId === state.creatorId);
    },
    isCreator(state: GameState): boolean {
      return state.userId === state.creatorId;
    },
    isElected(state: GameState, getters): boolean | undefined {
      return (getters.activeRound as Round)?.chancellorElected;
    },
    activeRound(state: GameState): Round | undefined {
      return state.rounds[state.activeRound];
    },
    president(state: GameState, getters): Member | undefined {
      return state.members.find(member => member.userId === getters.activeRound?.presidentId);
    },
    chancellor(state: GameState, getters): Member | undefined {
      return state.members.find(member => member.userId === getters.activeRound?.chancellorId);
    },
  },

  mutations: {
    [mutations.INIT_GAME](state: GameState, payload: GameJoinResponse) {
      // Clear old storage and setup a new game.
      localStorage.removeItem('gameStorage');

      state.token = payload.token;
      state.channelName = payload.channelName;
      state.userId = payload.userId;
      state.creatorId = payload.creatorId;

      // Resets
      state.rounds = [];
      state.activeRound = -1;
      state.members = [];
      state.connectedMembers = [];
      state.partyMembers = [];
      state.roleName = undefined;
      state.gameOver = false;
    },

    [mutations.SET_CURRENT_ACTION](state: GameState, action: Route) {
      state.currentAction = action;
    },

    [mutations.SET_CONNECTED_MEMBERS](state: GameState, members: Member[]) {
      state.connectedMembers = members;
    },

    [mutations.START_GAME](state: GameState, event: GameStart) {
      state.roleName = event.roleName;
      state.partyMembers = event.partyMembers || [];

      // Constant members when we start the game.
      state.members = state.connectedMembers;
    },

    [mutations.SET_NOMINATED_CHANCELLOR](state: GameState, chancellorId: UserID) {
      state.rounds[state.activeRound].chancellorId = chancellorId;
    },

    [mutations.SET_NEXT_ROUND](state: GameState, presidentId: UserID) {
      state.activeRound += 1;
      state.rounds.push({
        presidentId,
        chancellorId: null,
        chancellorElected: false,
        enactedPolicy: false,
        votes: [],
        secret: {
          // For president to nominate chancellor.
          electable: [],
          // For Chancellor to pick a policy to enact.
          chancellorPolicies: [],
          // For President to discard a policy of.
          presidentPolicies: [],
          // The policies the president can peek.
          policyPeek: [],
          // If a veto is possible.
          vetoPossible: false,
        },
      });
    },

    [mutations.ADD_VOTE](state: GameState, payload: Vote) {
      // Check if vote already exists.
      if (state.rounds[state.activeRound].votes.find(vote => vote.userId === payload.userId) !== undefined) {
        return;
      }

      state.rounds[state.activeRound].votes.push(payload);
    },

    [mutations.SET_CHANCELLOR_ELECTED](state: GameState, elected: boolean) {
      state.rounds[state.activeRound].chancellorElected = elected;
    },

    [mutations.SET_ELECTABLE](state: GameState, electable: UserID[]) {
      state.rounds[state.activeRound].secret.electable = electable;
    },

    [mutations.SET_PLAYER_KILLED](state: GameState, killed: UserID) {
      state.killed.push(killed);
    },

    [mutations.SET_CHANCELLOR_POLICIES](state: GameState, policies: Policy[]) {
      state.rounds[state.activeRound].secret.chancellorPolicies = policies;
    },

    [mutations.SET_PRESIDENT_POLICIES](state: GameState, policies: Policy[]) {
      state.rounds[state.activeRound].secret.presidentPolicies = policies;
    },

    [mutations.INC_ELECTION_TRACKER](state: GameState) {
      state.electionTracker += 1;
    },

    [mutations.RESET_ELECTION_TRACKER](state: GameState) {
      state.electionTracker = 0;
    },

    [mutations.SET_ENACTED_POLICY](state: GameState, enacted: Policy) {
      state.rounds[state.activeRound].enactedPolicy = enacted;
    },

    [mutations.SET_GAME_WON](state: GameState, payload: GameWon) {
      state.gameOver = payload;
    },

    [mutations.SET_PEEKED_POLICIES](state: GameState, policies: Policy[]) {
      state.rounds[state.activeRound].secret.policyPeek = policies;
    },

    [mutations.SET_VETO_POSSIBLE](state: GameState) {
      state.rounds[state.activeRound].secret.vetoPossible = true;
    },

  },
};

export default gameStore;
