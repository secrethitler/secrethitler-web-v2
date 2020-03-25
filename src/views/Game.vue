<template>
  <div class="game pb-8">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { registerHandlers, connectChannels } from '@/actions/handlers';
import Component from 'vue-class-component';

@Component
export default class Game extends Vue {
  created() {
    const channels = connectChannels(
      this.$store.getters.channelName,
      this.$store.getters.userId,
    );

    registerHandlers(channels);
  }
}
</script>
