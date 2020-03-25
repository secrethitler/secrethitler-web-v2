<template>
  <div>
    <page-title>Nominate</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">You are the new President!</h3>
        <p>Select a player you would like to nominate as chancellor.</p>

        <div class="mt-8">
          <ul>
            <li
              v-for="member in electable"
              :key="member.userId"
              class="py-2 font-serif text-gray-700 cursor-pointer text-xl px-3 bg-white rounded shadow flex justify-between mb-2"
            >
              <span v-text="member.userName" />
              <button
                class="py-1 px-2 upeprcase text-sm bg-gray-200 text-gray-700 font-bold rounded tracking-wide hover:bg-red-500 hover:text-yellow-200"
                @click="nominate(member.userId)"
              >Nominate</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import memberListFromIds from '@/utils/memberListFromIds';
import { Member, UserID } from '@/types/game';
import nominateChancellor from '@/actions/nominateChancellor';
import Component from 'vue-class-component';

@Component
export default class GameNominate extends Vue {
  get electable(): Member[] {
    const electableIds: UserID[] = this.$store.getters.activeRound.secret
      .electable;

    return memberListFromIds(electableIds);
  }

  // eslint-disable-next-line class-methods-use-this
  nominate(id: UserID) {
    nominateChancellor(id);
  }
}
</script>
