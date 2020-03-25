<template>
  <div>
    <page-title>Election</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <div class="mb-4">
          <h3
            class="font-serif text-2xl mb-4"
          >{{ chancellor.userName || '' }} was nominated as chancellor.</h3>
          <p>Do you accept this nomination?</p>
        </div>
        <div
          class="pt-6 flex justify-center"
          :class="{ 'opacity-50': hasVoted, 'pointer-events-none': hasVoted }"
        >
          <div
            class="p-6 max-w-xs cursor-pointer border-4 border-transparent"
            :class="{ 'border-red-700': voted === UserVote.Yes }"
            @click="vote(true)"
          >
            <img src="../assets/vote_yes.jpg" alt />
          </div>

          <div
            class="p-6 max-w-xs cursor-pointer border-4 border-transparent"
            :class="{ 'border-red-700': voted === UserVote.No }"
            @click="vote(false)"
          >
            <img src="../assets/vote_no.jpg" alt />
          </div>
        </div>

        <div
          class="pt-8 text-center font-old text-4xl text-gray-700"
        >{{ count }} / {{ members.length }} have voted.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import Vue from 'vue';
import voteChancellor from '../actions/voteChancellor';
import { Vote } from '../types/game';

type Data = {
  disable: boolean,
  voted: UserVote
}

enum UserVote {
  NotYet,
  Yes,
  No,
}

export default Vue.extend({
  data(): Data {
    return {
      disable: false,
      voted: UserVote.NotYet,
    };
  },

  computed: {
    ...mapGetters(['chancellor', 'members', 'activeRound', 'userId']),
    count(): number {
      return this.activeRound.votes.length;
    },
    hasFinished(): boolean {
      return this.count === this.members.length;
    },
    hasVoted(): boolean {
      return (
        this.disable
        || !!this.activeRound.votes.find((vote: Vote) => vote.userId === this.userId)
      );
    },
  },

  methods: {
    async vote(votedYes: boolean) {
      this.disable = true;
      try {
        await voteChancellor(votedYes);
        this.voted = votedYes ? UserVote.Yes : UserVote.No;
      } catch (e) {
        this.disable = false;
      }
    },
  },
});
</script>
