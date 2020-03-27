import Route from './route';

export type UserID = number;

export type Member = {
  userId: UserID
  userName: string,
  roleName?: Role,
  isCreator?: boolean
}

export type PusherMember = {
  id: string,
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

export type Vote = {
  userId: UserID,
  votedYes: boolean
}

type Secret = {
  electable: UserID[],
  presidentPolicies: Policy[],
  chancellorPolicies: Policy[],
  policyPeek: Policy[],
  vetoPossible: boolean
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
  currentAction: Route,

  activeRound: number,
  electionTracker: number,
  gameOver: false | {
    party: Party,
    reason: string
  },

  members: Member[],
  connectedMembers: Member[],
  partyMembers?: Member[],
  rounds: Round[],
  killed: UserID[],

  running: boolean
}

export type GameGetters = {
  userId?: UserID,
  token?: string,
  channelName?: ChannelName,
  members?: Member[],
  partyMembers?: Member[],
  rounds?: Round[],
  roleName?: Role,
  electionTracker?: number,

  you?: Member,
  creator?: Member,
  isCreator?: boolean,
  isElected?: boolean,
  activeRound?: Round,
  president?: Member,
  chancellor?: Member,
}

export type StoreRootState = {};
