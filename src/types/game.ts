import { PresenceChannel, Channel } from 'pusher-js';

export type UserID = number;

export type Member = {
  userId: UserID
  userName: string,
  roleName?: Role,
  isCreator?: boolean
}

export type PusherMember = {
  id: UserID,
  info: {
    isChannelCreator: boolean,
    userName: string
  }
}

export type ChannelName = string;

export enum Role {
  Hitler = 'secret hitler',
  Fascist = 'fascist',
  Liberal = 'liberal',
}

export enum Policy {
  Fascist = 'fascist',
  Liberal = 'liberal',
}

export enum Party {
  Fascist = 'fascist',
  Liberal = 'liberal',
}

export enum Action {
  Idle,
  Lobby,
  Voting,
  PresidentPicking,
  ChancellorPicking,
  Killing
}

export type Vote = {
  userId: UserID,
  votedYes: boolean
}

type Secret = {
  electable: UserID[],
  presidentPolicies: Policy[],
  chancellorPolicies: Policy[],
  policyPeek: Policy[],
}

export type Round = {
  presidentId: UserID,
  chancellorId: null | UserID,
  chancellorElected: boolean,
  enactedPolicy: false | Policy,
  votes: Vote[],
  secret: Secret
}

export type GameState = {
  token?: string,
  userId?: UserID,
  creatorId?: UserID,
  channelName?: ChannelName,
  roleName?: Role,
  currentAction: Action,

  activeRound: number,
  electionTracker: number,

  members: Member[],
  partyMembers?: Member[],
  rounds: Round[],
  killed: UserID[],

  running: boolean
}

export type ConnectionsState = {
  presence?: PresenceChannel | Channel,
  priv?: Channel,
  channel?: Channel,
}

export type StoreRootState = {};
