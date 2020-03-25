import { Module } from 'vuex';
import {
  GameState, StoreRootState, Member, Round, Role, UserID, Vote, Policy,
} from '@/types/game';
import { GameCreateResponse, GameJoinResponse } from '@/types/http';
import { GameStart } from '@/types/events';
import Route from '@/types/route';

export enum mutations {
  INIT_GAME = 'initGame',
  SET_MEMBERS = 'setMembers',
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
}

const gameStore: Module<GameState, StoreRootState> = {
  state: {
    token: undefined,
    userId: undefined,
    creatorId: undefined,
    channelName: undefined,
    roleName: undefined,

    currentAction: Route.GameLobby,
    partyMembers: [],
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
    rounds: state => state.rounds,
    roleName: state => state.roleName,
    electionTracker: state => state.electionTracker,
    allMembers: state => state.members,

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
      // Clear old storage.
      localStorage.removeItem('gameStorage');

      state.token = payload.token;
      state.channelName = payload.channelName;
      state.userId = payload.userId;
      state.creatorId = payload.creatorId;
      state.members = [];
    },

    [mutations.SET_CURRENT_ACTION](state: GameState, action: Route) {
      state.currentAction = action;
    },

    [mutations.SET_MEMBERS](state: GameState, members: Member[]) {
      state.members = members;
    },

    [mutations.START_GAME](state: GameState, event: GameStart) {
      state.roleName = event.roleName;
      state.partyMembers = event.partyMembers;
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

  },
};

export default gameStore;
