<template>
  <div class="game pb-8">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { registerHandlers, connectChannels } from '@/actions/handlers';

export default Vue.extend({
  created() {
    connectChannels(
      this.$store.getters.channelName,
      this.$store.getters.userId,
    );
    registerHandlers();
  },
});
</script>
