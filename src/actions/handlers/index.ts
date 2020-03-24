import store from '@/store';
import { ConnectionsState, UserID, ChannelName } from '@/types/game';
import pusher from '@/plugins/pusher';
import { Events } from '@/types/events';
import membersChanged from './membersChanged';
import gameStart from './gameStart';
import nextRound from './nextRound';
import chancellorNominated from './chancellorNominated';
import chancellorVote from './chancellorVote';
import notifyPresident from './notifyPresident';
import chancellorReceivePolicies from './chancellorReceivePolicies';
import presidentReceivePolicies from './presidentReceivePolicies';
import electionTracker from './electionTracker';
import executePlayer from './executePlayer';
import policyPeek from './policyPeek';
import specialElection from './specialElection';
import loyaltyInvestigation from './loyaltyInvestigation';

export const registerHandlers = () => {
  const { channel, presence, priv } = store.getters as ConnectionsState;

  // Presence handlers
  presence?.bind('pusher:subscription_succeeded', membersChanged);
  presence?.bind('pusher:member_removed', membersChanged);
  presence?.bind('pusher:member_removed', membersChanged);

  // Private handlers
  priv?.bind(Events.GameStart, gameStart);
  priv?.bind(Events.NotifyPresident, notifyPresident);
  priv?.bind(Events.ChancellorReceivePolicies, chancellorReceivePolicies);
  priv?.bind(Events.PresidentReceivePolicies, presidentReceivePolicies);
  priv?.bind(Events.ExecutePlayer, executePlayer);
  priv?.bind(Events.PolicyPeek, policyPeek);
  priv?.bind(Events.SpecialElection, specialElection);
  priv?.bind(Events.LoyaltyInvestigation, loyaltyInvestigation);

  // Global handlers
  channel?.bind(Events.NextRound, nextRound);
  channel?.bind(Events.ChancellorNominated, chancellorNominated);
  channel?.bind(Events.ChancellorVote, chancellorVote);
  channel?.bind(Events.ChancellorElected, chancellorVote);
  channel?.bind(Events.ElectionTracker, electionTracker);
};

export const connectChannels = (channelName: ChannelName, userId: UserID) => {
  if (!channelName || !userId) {
    throw new Error('Something went wrong.');
  }

  const presence = pusher.subscribe(`presence-${channelName}`);
  const priv = pusher.subscribe(`private-${userId}`);
  const channel = pusher.subscribe(channelName);

  store.commit('setChannels', {
    presence, priv, channel,
  });
};
