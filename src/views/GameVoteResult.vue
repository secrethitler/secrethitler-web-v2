<template>
  <div>
    <page-title>Election Result</page-title>

    <div class="container flex justify-center">
      <div class="w-full lg:w-1/2">
        <div class="mt-8">
          <ul>
            <li
              v-for="member in members"
              :key="member.userId"
              class="py-2 font-serif text-gray-700 cursor-pointer text-xl px-3 bg-white rounded shadow flex justify-between mb-2"
            >
              <span>{{ member.userName }}</span>
              <div
                class="vote-indicator"
                :class="{ 'vote-yes': getVoteForId(member.userId), 'vote-no': ! getVoteForId(member.userId) }"
              />
            </li>
          </ul>
        </div>

        <div class="flex justify-center py-4">
          <button class="btn shadow" @click="goBack">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import { UserID, Vote, Round } from '../types/game';
import navigateTo from '../utils/navigateTo';
import Route from '../types/route';

@Component({
  computed: mapGetters(['members', 'activeRound', 'channelName']),
})
export default class GameVoteResult extends Vue {
  activeRound!: Round;

  getVoteForId(id: UserID) {
    const vote: Vote | undefined = this.activeRound.votes.find(
      (v: Vote) => v.userId === id,
    );

    return vote?.votedYes || false;
  }

  // eslint-disable-next-line class-methods-use-this
  goBack() {
    navigateTo(Route.GameInfo);
  }
}
</script>

<style lang="scss" scoped>
.vote-indicator {
  width: 4rem;
  @apply rounded;

  &.vote-yes {
    @apply bg-green-500;
  }

  &.vote-no {
    @apply bg-red-500;
  }
}
</style>
