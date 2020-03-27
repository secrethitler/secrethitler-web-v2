<template>
  <div>
    <div class="font-serif text-white py-4 lg:py-6 mb-8 bg-red-600">
      <h1 class="text-3xl font-bold text-center">Investigate Player</h1>
    </div>
    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">You can investigate a player!</h3>
        <p>Select a player to investigate. You will find out his/her party membership.</p>

        <div v-if="investigating === false" class="mt-8">
          <ul>
            <li
              v-for="player in investigateable"
              :key="player.userId"
              class="py-2 font-serif text-gray-700 cursor-pointer text-xl px-3 bg-white rounded shadow flex justify-between mb-2"
            >
              <span>{{ player.userName }}</span>
              <button
                class="py-1 px-2 upeprcase text-sm bg-gray-200 text-gray-700 font-bold rounded tracking-wide hover:bg-red-500 hover:text-yellow-200"
                @click="investigate(player.userId)"
              >Investigate</button>
            </li>
          </ul>
        </div>

        <div v-if="investigating && this.membership">
          <div class="flex justify-center py-12">
            <div class="max-w-xl">
              <img
                v-if="membership === Party.Liberal"
                src="../assets/membership_liberal.jpg"
                alt="Liberal Membership"
              />
              <img
                v-if="membership === Party.Fascist"
                src="../assets/membership_fascist.jpg"
                alt="Fascist Membership"
              />
            </div>
          </div>

          <div class="flex justify-center py-4">
            <button
              class="btn shadow"
              @click="goBack"
            >Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Component from 'vue-class-component';
import investigatePlayer from '@/actions/investigatePlayer';
import { Party, Member, UserID } from '../types/game';
import navigateTo from '../utils/navigateTo';
import Route from '../types/route';

@Component({
  computed: mapGetters(['members', 'userId']),
})
export default class GameInvestigate extends Vue {
  investigating = false;

  membership?: Party = undefined;

  members!: Member[];

  userId!: UserID;

  Party = Party;

  get investigateable() {
    return this.members.filter(member => member.userId !== this.userId);
  }

  async investigate(id: UserID) {
    this.investigating = true;
    try {
      const { party } = await investigatePlayer(id);
      this.membership = party;
    } catch (e) {
      this.investigating = false;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  goBack() {
    navigateTo(Route.GameInfo);
  }
}
</script>
