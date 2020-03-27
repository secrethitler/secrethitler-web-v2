import {
  UserID, ChannelName, Policy, Party,
} from './game';

// POST: /game/create
export type GameCreateRequest = {
  userName: string
}

export type GameCreateResponse = {
  channelName: ChannelName,
  userId: UserID,
  userName: string,
  token: string
}

// POST: /game/join
export type GameJoinRequest = {
  userName: string,
  channelName:ChannelName,
}

// POST: /game/start
export type GameStartRequest = {
  userId: UserID,
  channelName: ChannelName
}

export type GameStartResponse = {

}

export type GameJoinResponse = {
  channelName: ChannelName,
  userId: UserID,
  userName: string,
  token: string,
  creatorId: UserID
}

// POST: /chancellor/nominate
export type ChancellorNominateRequest = {
  channelName: ChannelName,
  userId: UserID,
  chancellorId: UserID,
}

export type ChancellorNominateResponse = {

}

// POST: /chancellor/vote
export type ChancellorVoteRequest = {
  channelName: ChannelName,
  userId: UserID,
  votedYes: boolean,
}

export type ChancellorVoteResponse = {

}

// POST: /policy/chancellor-pick
export type PolicyChancellorPickRequest = {
  channelName: ChannelName,
  userId: UserID,
  discardedPolicy: Policy
}

export type PolicyChancellorPickResponse = {

}

// POST: /policy/president-pick
export type PolicyPresidentPickRequest = {
  channelName: ChannelName,
  userId: UserID,
  discardedPolicy: Policy
}

export type PolicyPresidentPickResponse = {

}

// GET: /policy/peek
export type PolicyPeekRequest = {
  channelName: ChannelName,
  userId: UserID,
}

export type PolicyPeekResponse = {
  policies: Policy[]
}

// POST: /round/next
export type RoundNextRequest = {
  channelName: ChannelName,
  userId: UserID,
}

export type RoundNextResponse = {
  // eslint-disable-next-line camelcase
  president_id: UserID
}

// POST: /round/request-veto
export type RoundRequestVetoRequest = {
  channelName: ChannelName,
  userId: UserID,
}

export type RoundRequestVetoResponse = {

}

// POST: /round/veto
export type RoundVetoRequest = {
  accepted: boolean,
  channelName: ChannelName,
  userId: UserID,
}

export type RoundVetoResponse = {

}

// POST: /round/special-election
export type RoundSpecialElectionRequest = {
  channelName: ChannelName,
  userId: UserID,
  nextPresidentId: UserID
}

export type RoundSpecialElectionResponse = {

}

// POST: /player/execute
export type PlayerExecuteRequest = {
  channelName: ChannelName,
  userId: UserID,
  executedUserId: UserID
}

export type PlayerExecuteResponse = {

}

// GET: /player/investigate/:userId
export type PlayerInvestigateRequest = {
  channelName: ChannelName,
  userId: UserID,
  investigatedUser: UserID
}

export type PlayerInvestigateResponse = {
  party: Party
}
