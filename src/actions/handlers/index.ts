import {
  UserID, ChannelName, Member, PusherMember,
} from '@/types/game';
import pusher from '@/plugins/pusher';
import { Events } from '@/types/events';
import { Channel, PresenceChannel } from 'pusher-js';
import store from '@/store';
import { mutations } from '@/store/game';
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
import chancellorElected from './chancellorElected';
import policyEnacted from './policyEnacted';
import gameWon from './gameWon';
import playerKilled from './playerKilled';

interface Channels {
  channel: Channel,
  priv: Channel,
  presence: PresenceChannel
}

export const registerHandlers = (channels: Channels) => {
  const { channel, priv } = channels;

  // Private handlers
  priv.bind(Events.GameStart, gameStart);
  priv.bind(Events.NotifyPresident, notifyPresident);
  priv.bind(Events.PresidentReceivePolicies, presidentReceivePolicies);
  priv.bind(Events.ChancellorReceivePolicies, chancellorReceivePolicies);
  priv.bind(Events.ExecutePlayer, executePlayer);
  priv.bind(Events.PolicyPeek, policyPeek);
  priv.bind(Events.SpecialElection, specialElection);
  priv.bind(Events.LoyaltyInvestigation, loyaltyInvestigation);
  priv.bind(Events.GameWon, gameWon);

  // Global handlers
  channel.bind(Events.NextRound, nextRound);
  channel.bind(Events.ChancellorNominated, chancellorNominated);
  channel.bind(Events.ChancellorVote, chancellorVote);
  channel.bind(Events.ChancellorElected, chancellorElected);
  channel.bind(Events.PolicyEnacted, policyEnacted);
  channel.bind(Events.ElectionTracker, electionTracker);
  channel.bind(Events.PlayerKilled, playerKilled);
};

export const connectChannels = (channelName: ChannelName, userId: UserID): Channels => {
  if (!channelName || !userId) {
    throw new Error('Something went wrong.');
  }

  const presence = pusher.subscribe(`presence-${channelName}`) as PresenceChannel;
  const priv = pusher.subscribe(`private-${userId}`);
  const channel = pusher.subscribe(channelName);

  function setMembers() {
    const membersToSet: Member[] = [];

    presence.members.each((member: PusherMember) => membersToSet.push({
      userId: parseInt(member.id, 10),
      userName: member.info.userName,
      isCreator: member.info.isChannelCreator,
    }));

    store.commit(mutations.SET_CONNECTED_MEMBERS, membersToSet);
  }

  presence.bind('pusher:subscription_succeeded', setMembers);
  presence.bind('pusher:member_added', setMembers);
  presence.bind('pusher:member_removed', setMembers);

  const channels = {
    presence, priv, channel,
  };

  return channels;
};
