<template>
  <div>
    <page-title>Eliminate Player</page-title>

    <div class="container flex justify-center">
      <div class="lg:w-1/2">
        <h3 class="font-serif text-2xl mb-4">You have the power to eliminate one player!</h3>
        <p>Select a player which should be killed.</p>

        <div class="mt-8" :class="getClasses">
          <ul>
            <li
              v-for="player in killable"
              :key="player.userId"
              class="py-2 font-serif text-gray-700 cursor-pointer text-xl px-3 bg-white rounded shadow flex justify-between mb-2"
            >
              <span>{{ player.userName }}</span>
              <button
                class="py-1 px-2 upeprcase text-sm bg-gray-200 text-gray-700 font-bold rounded tracking-wide hover:bg-red-500 hover:text-yellow-200"
                @click="eliminate(player.userId)"
              >Eliminate</button>
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
import executePlayer from '../actions/executePlayer';

@Component({
  computed: mapGetters(['members', 'userId']),
})
export default class GameKillPlayer extends Vue {
  eliminating = false;

  members!: Member[];

  userId!: UserID;

  get killable() {
    return this.members.filter(member => member.userId !== this.userId);
  }

  get getClasses() {
    return this.eliminating ? ['opacity-50', 'pointer-events-none'] : [];
  }

  eliminate(id: UserID) {
    this.eliminating = true;
    try {
      executePlayer(id);
    } catch (e) {
      this.eliminating = false;
    }
  }
}
</script>
