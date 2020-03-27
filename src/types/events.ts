import {
  UserID, Party, Policy, Role,
} from './game';

export enum Events {
  ChancellorNominated = 'chancellorNominated',
  ChancellorVote = 'chancellorVote',
  ChancellorElected = 'chancellorElected',

  GameWon = 'gameWon',
  GameStart = 'gameStart',
  NextRound = 'nextRound',

  NotifyPresident = 'notifyPresident',

  PresidentReceivePolicies = 'presidentReceivePolicies',
  ChancellorReceivePolicies = 'chancellorReceivePolicies',

  PolicyEnacted = 'policyEnacted',
  PlayerKilled = 'playerKilled',
  ElectionTracker = 'electionTracker',
  ResetElectionTracker = 'resetElectionTracker',

  PolicyPeek = 'policyPeek',
  ExecutePlayer = 'executePlayer',
  LoyaltyInvestigation = 'loyaltyInvestigation',
  SpecialElection = 'specialElection',

  VetoPossible = 'vetoPossible',
  RequestVeto = 'requestedVeto',
  VetoAccepted = 'vetoAccepted',
  VetoDenied = 'vetoDenied'
}

// channel
export type ChancellorNominated = {
  chancellorId: UserID
}

// channel
export type ChancellorVote = {
  userId: UserID,
  votedYes: boolean
}

// channel
export type ChancellorElected = {
  elected: boolean
}

// channel
export type GameWon = {
  party: Party,
  reason: string,
}

// private
export type GameStart = {
  userId: UserID,
  roleId: number,
  roleName: Role,
  userName: string,
  partyMembers?: {
    userId: UserID,
    userName: string,
    roleName: Role
  }[]
}

// channel
export type NextRound = {
  presidentId: UserID
}

// private
export type NotifyPresident = {
  electable: UserID[]
}

// channel
export type PlayerKilled = {
  userId: UserID
}

// private
export type PresidentReceivePolicies = {
  policies: Policy[]
}

// private
export type ChancellorReceivePolicies = {
  policies: Policy[]
}

// channel
export type ElectionTracker = {

}

// channel
export type ResetElectionTracker = {

}

// channel
export type PolicyEnacted = {
  policy: Policy
}

// private
export type PolicyPeek = {

}

// private
export type ExecutePlayer = {

}

// private
export type LoyaltyInvestigation = {

}

// private
export type SpecialElection = {

}

// private
export type VetoPossible = {

}

// private
export type RequestVeto = {

}

// channel
export type VetoAccepted = {

}

// private
export type VetoDenied = {

}
