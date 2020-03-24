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
            :key="member.user_id"
            class="flex bg-white rounded shadow-lg items-center px-4 py-3 mb-2 text-lg font-serif"
          >
            {{ member.user_name }}
            <span
              v-if="member.user_id == userId"
              class="ml-2 bg-red-600 text-white uppercase font-bold text-serif p-2 text-xs"
            >YOU</span>

            <span v-if="member.is_channel_creator" class="ml-2">
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

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['members', 'userId', 'isCreator']),
    link() {
      return `${window.location.protocol}//${window.location.host}/join-game?lobby=${this.$route.params.id}`;
    },
  },

  methods: {
    copyToClipboard() {
      this.$refs.link.select();

      document.execCommand('copy');
    },

    startGame() {
      this.$http
        .post('/game/start', {
          channelName: this.$route.params.id,
        })
        .then((res) => {
          console.log('starting game');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.game-start-btn {
  &[disabled] {
    @apply cursor-not-allowed opacity-50;
  }
}
</style>
