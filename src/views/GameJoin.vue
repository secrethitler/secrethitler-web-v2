<template>
  <div class="game-join min-h-screen">
    <modal ref="error-modal" name="error-modal">
      <div class="p-4">{{ error }}</div>
    </modal>

    <div class="container font-serif text-white py-4 lg:py-12">
      <h1 class="text-5xl font-bold text-center mb-12">Join a Lobby</h1>

      <div class="flex flex-wrap -mx-4">
        <div class="px-4 w-full lg:w-1/2 mb-8 lg:order-2">
          <form
            ref="form"
            action="/game/join"
            method="POST"
            @submit.prevent="handleSubmit"
            class="block w-full"
          >
            <div class="mb-6">
              <ui-label for="userName">Your Name</ui-label>
              <ui-input id="userName" type="text" name="userName" required v-model="userName" />
            </div>
            <div class="mb-8">
              <ui-label for="channelName">Lobby ID</ui-label>
              <ui-input
                id="channelName"
                type="text"
                name="channelName"
                required
                v-model="channelName"
              />
            </div>
            <div class="flex justify-end">
              <button class="btn">Join Lobby</button>
            </div>
          </form>
        </div>
        <div class="px-4 w-full lg:w-1/2 mb-8 lg:order-1">
          <div class="flex justify-center">
            <img src="../assets/landingpage/bird.png" alt="Bird" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import joinGame from '../actions/joinGame';

@Component
export default class GameJoin extends Vue {
  channelName = '';

  userName = '';

  error = '';

  joining = false;

  async handleSubmit() {
    if (this.joining) {
      return;
    }

    this.joining = true;

    try {
      await joinGame(this.userName, this.channelName);

      this.$gtag.event('game', {
        event_category: 'join',
        event_label: this.channelName,
      });
    } catch (e) {
      this.error = e;
      this.joining = false;
    }
  }

  created() {
    if (typeof this.$route.query.lobby === 'string') {
      this.channelName = this.$route.query.lobby;
    }
  }
}
</script>

<style lang="scss" scoped>
.game-join {
  @apply bg-red-600;
}

input {
  @apply text-gray-800 px-2 py-2 rounded shadow border-none;
}
</style>
