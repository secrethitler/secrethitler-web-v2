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

@Component({
  computed: mapGetters([
    'gameOver',
  ]),
})
export default class GameWon extends Vue {

}
</script>
