<template>
  <div>
    <page-title>Game Over</page-title>

    <div v-if="gameOver !== false" class="container">
      <h3 class="mb-2 font-old text-4xl">{{ gameOver.party }}s have won the game.</h3>
      <p>{{ gameOver.reason }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapGetters } from 'vuex';
import { Party } from '../types/game';

@Component({
  computed: mapGetters([
    'gameOver',
  ]),
})
export default class GameWon extends Vue {
  gameOver!: { party: Party, reason: string };

  mounted() {
    this.$gtag.event('game', {
      event_category: 'game-over',
      event_label: `${this.gameOver.party}: ${this.gameOver.reason}`,
    });
  }
}
</script>
