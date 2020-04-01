<template>
  <div>
    <page-title>Special Election</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">You can propose the next president directly!</h3>

        <div v-if="electing === false" class="mt-8">
          <ul>
            <li
              v-for="member in electable"
              :key="member.userId"
              class="py-2 font-serif text-gray-700 cursor-pointer text-xl px-3 bg-white rounded shadow flex justify-between mb-2"
            >
              <span>{{ member.userName }}</span>
              <button
                class="py-1 px-2 upeprcase text-sm bg-gray-200 text-gray-700 font-bold rounded tracking-wide hover:bg-red-500 hover:text-yellow-200"
                @click="elect(member.userId)"
              >Elect as President</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import { Member, UserID } from '../types/game';
import specialElection from '../actions/specialElection';

@Component({
  computed: mapGetters(['members', 'userId']),
})
export default class GameSpecialElection extends Vue {
  electing = false;

  members!: Member[];

  userId!: UserID;

  get electable() {
    return this.members.filter((member) => member.userId !== this.userId);
  }

  async elect(nextPresidentId: number) {
    this.electing = true;
    try {
      await specialElection(nextPresidentId);

      this.$gtag.event('game', {
        event_category: 'special-election',
        event_label: this.$store.getters.channelName,
      });
    } catch (e) {
      this.electing = false;
    }
  }
}
</script>
