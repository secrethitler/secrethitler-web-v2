<template>
  <div>
    <page-title>Lobby</page-title>

    <div class="container">
      <div class="flex flex-wrap justify-start items-center mb-8">
        <h3 class="w-full md:w-auto font-serif text-2xl mb-2 mr-4">Invite your friends:</h3>
        <div class="flex flex-1 w-full md:w-auto">
          <input
            ref="link"
            class="w-full lg:w-auto font-mono text-sm md:text-base lg:text-lg text-gray-700 px-3 py-2 bg-gray-200 select-all rounded flex-1"
            :value="link"
            readonly
          />
          <div>
            <button
              class="h-full flex items-center bg-red-600 py-2 px-4 text-center text-white font-bold tracking-wide uppercase leading-none"
              @click="copyToClipboard"
            >Copy</button>
          </div>
        </div>
      </div>
      <div v-if="members.length > 0">
        <h3 class="font-serif text-2xl mb-2 mr-4">Players:</h3>
        <ul>
          <li
            v-for="member in members"
            :key="member.userId"
            class="flex bg-white rounded shadow-lg items-center px-4 py-3 mb-2 text-lg font-serif"
          >
            {{ member.userName }}
            <span
              v-if="member.userId == userId"
              class="ml-2 bg-red-600 text-white uppercase font-bold text-serif p-2 text-xs"
            >YOU</span>

            <span v-if="member.isCreator" class="ml-2">
              <icon icon="crown" class="text-2xl text-yellow-600"></icon>
            </span>
          </li>
        </ul>
      </div>
      <loader v-else></loader>

      <div v-if="isCreator" class="mt-4 flex justify-center">
        <button
          class="btn shadow game-start-btn"
          :disabled="members.length < 5 || members.length > 10"
          @click="startGame"
        >Start Game</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import startGame from '@/actions/startGame';
import Component from 'vue-class-component';

@Component({
  computed: mapGetters(['members', 'userId', 'isCreator']),
})
export default class GameLobby extends Vue {
  get link() {
    return `${window.location.protocol}//${window.location.host}/join-game?lobby=${this.$route.params.id}`;
  }

  copyToClipboard() {
    (this.$refs.link as HTMLInputElement).select();

    document.execCommand('copy');
  }

  // eslint-disable-next-line class-methods-use-this
  startGame() {
    startGame();
  }
}
</script>

<style lang="scss" scoped>
.game-start-btn {
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }
}
</style>
